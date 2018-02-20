import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

class Rates extends Component {
  render (){
    const { Subheader } = Header
    return (
      <Container>
        <Header as="h2">
          Rates
          <Subheader>
            Our costs will vary depending on the nature of the document(s) you want us to look at. We can provide a quote once we see what is involved.
          </Subheader>
        </Header>
        <p>Student discount - we offer a 25% discount to all tertiary students.</p>
        <p>Please note that for a single page document there is a minimum $15.00 charge.</p>
      </Container>
    )
  }
}

export default Rates
