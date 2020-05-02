import React, { useState } from "react"
import { Link } from "gatsby"

import ctaStyles from "./styles/cta.module.scss"
import { Menu, Container, Transition, Image, Form} from "semantic-ui-react";

const CTA = ({ label }) => {

  const [active, setActive] = useState(false)
  const [visible, setVisibility] = useState(false)

  return (
    <Container onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <Form.Button
            content="do the thing"
            onClick={() => setVisibility(!visible)}
      />
      <Transition.Group animation="slide right" duration="500">
        {visible && (
          <Menu pointing secondary>
            <Menu.Item as={Link} to="/blog" activeClassName="active" name="My Journey"/>
          </Menu>
        )}
      </Transition.Group>
    </Container>
  )
}

export default CTA

