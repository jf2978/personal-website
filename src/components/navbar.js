// Packages
import React from "react"
import PropTypes from "prop-types"
import { Segment, Menu } from "semantic-ui-react"

// Styles
import "./layout.css"
import '../styles/styles.scss';
import 'semantic-ui-less/semantic.less';
import { StaticQuery, Link } from "gatsby";

const NavBar = ({menuLinks}) => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item as={Link} to="/" activeClassName='active' name='home'/>
      <Menu.Item as={Link} to="/journey" activeClassName='active' name='journey'/>
      <Menu.Item as={Link} to="/blog" activeClassName='active' name='blog'/>
    </Menu>
  </Segment>
)

export const props = () => (
  <StaticQuery
    query={graphql`
      {
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
