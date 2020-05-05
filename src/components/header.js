import PropTypes from "prop-types"
import React from "react"
import { Header as SemanticHeader } from "semantic-ui-react"
import styled from "@emotion/styled"

const Title = styled('p')`
  font-size: 150px;
  font-family: 'Permanent Marker';
  color: whitesmoke;
`

const Header = ({ title }) => {
  return (
    <SemanticHeader textAlign="centered">
      <Title> {title} </Title>
    </SemanticHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  name: ``
}

export default Header
