import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

class About extends Component {

  render (){
    const {Subheader} = Header
    return (
      <Container>
        <Header as="h2">
          About
          <Subheader>
            Underline It is owned and operated by Louisa Gommans.  Louisa has over 10 years experience as a university academic, translator, author and lawyer (although she is no longer practising).
          </Subheader>
        </Header>
      </Container>
    )
  }
}

export default About
