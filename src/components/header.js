import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Header, Container } from "semantic-ui-react"

import headerStyles from "../components/styles/header.module.scss"

const HomepageHeader = ( { title }) => {
  return (
    <Header textAlign="centered">
      <p className={headerStyles.header}> {title} </p>
    </Header>
  )
}

export default HomepageHeader
