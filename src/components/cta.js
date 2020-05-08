import React from "react"
import { Container} from "semantic-ui-react";
import styled from "@emotion/styled";


const Label = styled('p')`

  font-size: 22px;
  font-weight: 600;
  font-family: 'Cairo', sans-serif;
  display: inline-block;
  color: whitesmoke;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  &:after {
    content: '';
    width: 0px;
    height: 4px;
    display: inline-block;
    background: aqua;
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
      <Label>
        {label}
      </Label>
    </Container>
  )
}

export default CTA