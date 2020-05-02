import React from "react"

import ctaStyles from "./styles/cta.module.scss"
import { Container} from "semantic-ui-react";

const CTA = ({ label }) => {

  return (
    <Container text textAlign="center">
      <p className={ctaStyles.cta}>
        {label}
      </p>
    </Container>
  )
}

export default CTA

