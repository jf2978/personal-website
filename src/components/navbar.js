import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";
import { Menu, Image, Grid } from "semantic-ui-react"
import { Link } from "gatsby";

const Nav = styled.div`

  // container
  & {
    display: inline-flex;
    justify-content: space-between;
  }

  // logo stuff

`

const MenuItem = styled(Menu.Item)`
  font-size: 20px;
  font-family: 'Cairo', sans-serif;
`

const Logo = styled(Image)`
  width:150px;
  height:150px;
`
/*
const NavBar = () => (
  <>
    <Nav>
      <div>
        <Logo src="https://media.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif" />
      </div>
      <div>
        <Menu pointing secondary>
          <MenuItem as={Link} to="/" activeClassName="active" position="right"> Home </MenuItem>
          <MenuItem as={Link} to="/journey" activeClassName="active"> Journey </MenuItem>
          <MenuItem as={Link} to="/blog" activeClassName="active"> Blog </MenuItem>
        </Menu>
      </div>
    </Nav>
  </>
)*/

const NavBar = () => (
  <>
    <Grid columns={3}>
      <Grid.Column width={1} floated="left">
        <Logo src="https://media.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif" />
      </Grid.Column>
      <Grid.Column width={9}></Grid.Column>
      <Grid.Column floated="right">
        <Menu pointing secondary>
          <MenuItem as={Link} to="/" activeClassName="active" position="right"> Home </MenuItem>
          <MenuItem as={Link} to="/journey" activeClassName="active"> Journey </MenuItem>
          <MenuItem as={Link} to="/blog" activeClassName="active"> Blog </MenuItem>
        </Menu>
      </Grid.Column>
    </Grid>
  </>
)

NavBar.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
}

NavBar.defaultProps = {
  name: ``
}

export default NavBar
