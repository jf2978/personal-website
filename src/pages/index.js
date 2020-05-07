// Packages/Plugins
import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Button, Divider, Transition } from "semantic-ui-react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blurb from "../components/blurb"
import CTA from "../components/cta"
import Header from "../components/header"

// Assets
import bg from "../images/bk-background-2.jpg"

const blurbText = "Professional software engineer, passionate thinker and aspiring creator — at least that's who I think I am. Instead of trying to organize my nuanced, fluid and vivid life experiences into simple, discrete and digestible bullet points for the sake of filling a job description, I just want to start documenting my life. I created this site to share my reflections and incomplete thoughts, not to publish a curated snapshot of who I want you to think I am. And maybe along the way, I'll start to get a better sense of who I actually am."
const ctaLabel = "MY JOURNEY"
const headerTitle = "Hey, I'm Jeff"
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IndexPage = () => {

  return (
    <Layout background={bg}>
      <Transition transitionOnMount animation="fade up" duration={1000}>
          <Main>
            <SEO title="Jeffrey Fabian" />
            <Header title={headerTitle} />
            <Blurb text={blurbText} />
            <CTA label={ctaLabel} />
          </Main>
      </Transition>
    </Layout>
  )

}

export default IndexPage