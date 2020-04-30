// Packages
import React from "react"
import PropTypes from "prop-types"
import { Segment, Menu } from "semantic-ui-react"

// Styles
import "./layout.css"
import '../styles/styles.scss';
import 'semantic-ui-less/semantic.less';
import { StaticQuery } from "gatsby";

const NavBar = () => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item
        name='home'
      />
      <Menu.Item
        name='journey'
      />
      <Menu.Item
        name='blog'
      />
    </Menu>
  </Segment>
)

export const props = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <NavBar data={data} {...props} />}
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
