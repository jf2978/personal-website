/**
 *  Runs once in the process of building the site to load plugins, create pages,
 *  add nodes to GraphQL or respond to build lifecycle events.
 */

const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// createPages is the API function responsible for programmatically creating new pages (calls the createPage "action" internally)
// Note that Gatsby automatically generates pages from the files that live in src/pages

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions; // grab actions we'll be using

  // resolve the filepaths for any existing page templates
  const postTemplate = path.resolve(`src/templates/post-template.js`);
  const tagTemplate = path.resolve(`src/templates/tags-template.js`);
  const blogListTemplate = path.resolve(`./src/templates/blog-list-template.js`);

  // query for markdown stuff
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {

    // if that query returned some error, reject that promise
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // iterate through posts and create a page for each
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: { slug: node.fields.slug }, // additional data can be passed via context
      });
    });

    // Iterate through each post, if a tag value exists add it the tags array
    let tags = [];
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });

    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages (e.g. see all content related to "cats" tag)
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });

    // Create blog post list pages
    const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);

    // Construct of where length = numPages, iterate through the array by index
    // and create pages for each based on the page it should be on
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `blog/` : `blog/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};