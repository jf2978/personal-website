import React from "react"

import blurbStyles from "./styles/blurb.module.scss";
import { Container, Divider } from "semantic-ui-react";

// Blurb is a basic text abstraction created in order to leverage component-scoped styles
// and make it available for future re-use the style if needed later
const Blurb = ({ text }) => {

  return (
    // fun fact: this <> ... </> syntax is a short syntax for a React "fragment"
    // Fragments are nice because they give us the benefit of chunking JSX (like containers)
    // without actually rendering anything (bonus that it cleans up the DOM)
    <>
      <Container textAlign="justified">
        <p className={blurbStyles.text}>
          {text}
        </p>
        <Divider />
      </Container>
    </>
  )
}

export default Blurb

