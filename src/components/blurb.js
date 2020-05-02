import React from "react"
import "./layout.css"
import "../styles/styles.scss";
import "semantic-ui-less/semantic.less";


const HomepageText = () => {

  return (
    // fun fact: this <> ... </> syntax is a short syntax for a React "fragment"
    // Fragments are nice because they give us the benefit of chunking JSX (like containers)
    // without actually rendering anything (bonus that it cleans up the DOM)
    <>
      <p>
      Professional software engineer, passionate thinker and aspiring creator — at least that's who I think I am.
      Instead of trying to organize my nuanced, fluid and vivid life experiences into simple, discrete and digestible bullet points for the sake of filling a job description, I just want to start documenting my life.
      I created this site to share my reflections and incomplete thoughts, not to publish a curated snapshot of who I want you to think I am.
      And maybe along te way, I'll start to get a better sense of who I actually am.
      </p>
    </>
  )
}

export default HomepageText

