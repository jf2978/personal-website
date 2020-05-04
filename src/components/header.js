import PropTypes from "prop-types"
import React from "react"
import { Header } from "semantic-ui-react"
import styled from "@emotion/styled"

const Title = styled('p')`
  font-size: 150px;
  font-family: 'Permanent Marker';
  color: whitesmoke;
`

const HomepageHeader = ({ title }) => {
  return (
    <Header textAlign="centered">
      <Title> {title} </Title>
    </Header>
  )
}

HomepageHeader.propTypes = {
  title: PropTypes.string,
}

HomepageHeader.defaultProps = {
  name: ``
}

export default HomepageHeader
