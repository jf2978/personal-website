import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blurb from "../components/blurb"
import CTA from "../components/cta"
import HomepageHeader from "../components/header"

const blurbText = "Professional software engineer, passionate thinker and aspiring creator — at least that's who I think I am. Instead of trying to organize my nuanced, fluid and vivid life experiences into simple, discrete and digestible bullet points for the sake of filling a job description, I just want to start documenting my life. I created this site to share my reflections and incomplete thoughts, not to publish a curated snapshot of who I want you to think I am. And maybe along the way, I'll start to get a better sense of who I actually am."
const ctaLabel = "MY JOURNEY"
const headerTitle = "Hey, I'm Jeff"

const IndexPage = () => (
  <Layout>
    <SEO title="Jeffrey Fabian" />
    <HomepageHeader title={headerTitle} />
    <Blurb text={blurbText} />
    <Link to="/page-2/" My Journey />
    <CTA label={ctaLabel} />
  </Layout>
)

export default IndexPage