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
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: { slug: node.fields.slug }, // additional data can be passed via context
      });
    });
    // create Tags pages
    // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);
    // Make tag pages
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