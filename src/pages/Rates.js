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
            The time it takes to do the work for you will vary depending on the nature of the document/s you want us to look at.  We can provide a quote once we see what is involved.
          </Subheader>
        </Header>
        <br/>
        <br/>
        Student discount - we offer a 25% discount to all tertiary students.
        <br/>
        Please note that for a single page document there is a minimum $25.00 charge.

      </Container>
    )
  }
}

export default Rates
