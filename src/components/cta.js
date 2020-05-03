import React from "react"
import { Container} from "semantic-ui-react";
import styled from "@emotion/styled";


const Paragraph = styled('p')`

  font-size: 24px;
  font-weight: 600;
  font-family: 'Cairo', sans-serif;
  display: inline-block;

  &:after {
    content: '';
    width: 0px;
    height: 4px;
    display: inline-block;
    background: black;
    transition: 300ms;
  }

  &:hover:after {
    width: 140%;
    margin-left: -20%;
  }
`

const CTA = ({ label }) => {

  return (
    <Container text textAlign="center">
      <Paragraph>
        {label}
      </Paragraph>
    </Container>
  )
}

export default CTA