import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlurb from "../components/blurb"

const IndexPage = () => (
  <Layout>
    <SEO title="Jeffrey Fabian" />
    <h1>Hey, I'm Jeff</h1>
    <TextBlurb blurb="stuff" />
    <Link to="/page-2/">My Journey</Link>
  </Layout>
)

export default IndexPage

/**
 * Professional software engineer, passionate thinker and aspiring creator — at least that's who I think I am.
      Instead of trying to organize my nuanced, fluid and vivid life experiences into simple, discrete and digestible bullet points for the sake of filling a job description, I just want to start documenting my life.
      I created this site to share my reflections and incomplete thoughts, not to publish a curated snapshot of who I want you to think I am.
      And maybe along te way, I'll start to get a better sense of who I actually am.
    </p>
 */