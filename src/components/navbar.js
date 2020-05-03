import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";
import { Menu } from "semantic-ui-react"
import { Link } from "gatsby";

const MenuItem = styled(Menu.Item)`
  font-size: 20px;
  font-family: 'Cairo', sans-serif;
`

const NavBar = () => (
  <Menu pointing secondary>
    <MenuItem as={Link} to="/" activeClassName="active" position="right"> Home </MenuItem>
    <MenuItem as={Link} to="/journey" activeClassName="active"> Journey </MenuItem>
    <MenuItem as={Link} to="/blog" activeClassName="active"> Blog </MenuItem>
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
