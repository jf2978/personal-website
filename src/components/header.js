import PropTypes from "prop-types"
import React from "react"
import { Header } from "semantic-ui-react"
import headerStyles from "../components/styles/header.module.scss"

const HomepageHeader = ({ title }) => {
  return (
    <Header textAlign="centered">
      <p className={headerStyles.header}> {title} </p>
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
