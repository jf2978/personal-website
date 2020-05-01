// Packages
import React from "react"
import PropTypes from "prop-types"
import { Segment, Menu, Container } from "semantic-ui-react"

// Styles
import "./layout.css"
import "../styles/styles.scss";
import "semantic-ui-less/semantic.less";
import { graphql, StaticQuery, Link } from "gatsby";

const NavBar = ({menuLinks}) => (

  <Menu inverted pointed>
    <Container fluid>
      <Menu.Item as={Link} to="/" name="logo" position="left"/>
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
