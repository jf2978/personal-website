import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blurb from "../components/blurb"

const IndexPage = () => (
  <Layout>
    <SEO title="Jeffrey Fabian" />
    <h1>Hey, I'm Jeff</h1>
    <Blurb blurb="stuff" />
    <Link to="/page-2/">My Journey</Link>
  </Layout>
)

export default IndexPage