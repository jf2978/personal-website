// Packages/Plugins
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled";
import VideoBg from "reactjs-videobg";

// Components
import NavBar from "./navbar"

// Assets
import "semantic-ui-less/semantic.less";

const Container = styled.div`
  background-image: url(${props => props.background});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

// Layout is the React component responsible for the navbar links, the logo and
const Layout = ({ background, children }) => {
  return (
    <Container fluid>
      <VideoBg>
        <VideoBg.Source src={background} type="video/mp4" />
      </VideoBg>;
      <NavBar></NavBar>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
