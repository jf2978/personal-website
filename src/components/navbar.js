import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";
import { Menu, Image } from "semantic-ui-react"
import { Link } from "gatsby";

// Component Styles
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  margin: 25px;
`

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`

const MenuItem = styled(Menu.Item)`
  font-size: 20px;
  font-family: 'Cairo', sans-serif;
`

// JSX
const NavBar = () => (
  <Nav>
    <Logo>
      <Image centered width={150} height={150} src="https://media.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif" />
    </Logo>
    <MenuContainer>
      <Menu inverted pointing secondary>
        <MenuItem as={Link} to="/" activeClassName="active" position="right"> Home </MenuItem>
        <MenuItem  as={Link} to="/blog" activeClassName="active"> Journey </MenuItem>
        <MenuItem as={Link} to="/blog" activeClassName="active"> Blog </MenuItem>
      </Menu>
    </MenuContainer>
  </Nav>
)

NavBar.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
}

NavBar.defaultProps = {
  name: ``
}

export default NavBar
