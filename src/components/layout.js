import React from "react"
import PropTypes from "prop-types"

// components
import NavBar from "./navbar"

// styles
import "./layout.css"
import "../styles/styles.scss"
import { Container } from "semantic-ui-react"

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <NavBar></NavBar>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
