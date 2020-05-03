import React from "react"
import PropTypes from "prop-types"
import { Menu } from "semantic-ui-react"
import { Link } from "gatsby";
import "semantic-ui-less/semantic.less";

import navbarStyles from "../components/styles/navbar.module.scss"

const NavBar = () => (
  <Menu pointing secondary>
    <Menu.Item className={navbarStyles.item} as={Link} to="/" activeClassName="active" position="right">
      Home
    </Menu.Item>
    <Menu.Item className={navbarStyles.item} as={Link} to="/journey" activeClassName="active">
      Journey
    </Menu.Item>
    <Menu.Item className={navbarStyles.item} as={Link} to="/blog" activeClassName="active">
      Blog
    </Menu.Item>
  </Menu>
)

NavBar.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
}

NavBar.defaultProps = {
  name: ``
}

export default NavBar
