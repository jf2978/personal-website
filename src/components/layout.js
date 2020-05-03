import React from "react"
import PropTypes from "prop-types"
import NavBar from "./navbar"
import { Container } from "semantic-ui-react"
import layoutStyles from "./styles/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <Container className={layoutStyles.container} fluid>
      <NavBar></NavBar>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
