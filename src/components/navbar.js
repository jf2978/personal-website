import React from "react"
import PropTypes from "prop-types"
import { Menu, Container } from "semantic-ui-react"
import "./layout.css"
import "../styles/styles.scss";
import "semantic-ui-less/semantic.less";
import { graphql, StaticQuery, Link } from "gatsby";

const NavBar = () => (
  <Menu pointing secondary>
    <Container fluid>
      <Menu.Item as={Link} to="/" activeClassName="active" name="home" position="right"/>
      <Menu.Item as={Link} to="/journey" activeClassName="active" name="journey"/>
      <Menu.Item as={Link} to="/blog" activeClassName="active" name="blog"/>
    </Container>
  </Menu>
)

export const props = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <NavBar menuLinks={data.site.siteMetadata.menuLinks} {...props} />}
  />
)

NavBar.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
}

NavBar.defaultProps = {
  name: ``
}

export default NavBar
