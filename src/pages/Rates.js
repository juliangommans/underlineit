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
            Our costs vary depending on the work involved.  We are happy to talk with you about your individual needs, and then provide you with a tailored quote. 
          </Subheader>
        </Header>
        <p>Student discount - we offer a 25% discount to all tertiary students.</p>
      </Container>
    )
  }
}

export default Rates
