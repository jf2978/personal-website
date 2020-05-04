import React from "react"
import PropTypes from "prop-types"
import { Container, Divider } from "semantic-ui-react"
import styled from "@emotion/styled"

const Paragraph = styled('p')`
  font-size: 20px;
  font-family: 'Cairo', sans-serif;
  font-style: italic;
  color: whitesmoke;
`

const Blurb = ({ text }) => {

  return (
    <Container textAlign="justified">
      <Paragraph>
        {text}
      </Paragraph>
      <Divider/>
    </Container>
  )
}

Blurb.propTypes = {
  text: PropTypes.string,
}

Blurb.defaultProps = {
  text: ``
}

export default Blurb