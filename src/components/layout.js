import React from "react"
import PropTypes from "prop-types"
import NavBar from "./navbar"
import { Container } from "semantic-ui-react"
import "semantic-ui-less/semantic.less";
import styled from "@emotion/styled";

const StyledContainer = styled(Container)`
  background-image: url(${props => props.background});
  filter: grayscale(80%);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Layout = ({ background, children }) => {
  return (
    <StyledContainer background={background} fluid>
      <NavBar></NavBar>
      <main>{children}</main>
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
