import React from "react"
import { Container, Placeholder, PlaceholderParagraph } from "semantic-ui-react"
import "./layout.css"
import "../styles/styles.scss";
import "semantic-ui-less/semantic.less";

class TextBlurb extends React.Component {

  state = { loading: false }

  placeholderBlurbText = () => {
    return (
      <Placeholder>
        <PlaceholderParagraph>
          <Placeholder.Line length='medium' />
          <Placeholder.Line length='medium' />
          <Placeholder.Line length='medium' />
          <Placeholder.Line length='medium' />
        </PlaceholderParagraph>
      </Placeholder>
    )
  }

  blurbText = () => {
    return (
      <p>
        Some other text!
      </p>
    )
  }

  render() {
    const { loading } = this.state

    return (
      <Container>
        { loading ? this.placeholderBlurbText() : this.blurbText() }
      </Container>
    )
  }
}

export default TextBlurb

