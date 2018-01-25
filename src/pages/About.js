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
            Underline It is owned and operated by Louisa Gommans.  Louisa has over 10 years experience as a university academic, translator, author and commercial lawyer (although she is no longer practising).
          </Subheader>
        </Header>
        <Container textAlign="left">
          <Header as="h3">
            Qualifications:
          </Header>
          <ul>
            <li>LLB (Bachelor of Laws)</li>
            <li>BA Hons (Bacher of Arts with Honours)</li>
            <li>ATCL (Associate of Trinity College, London)</li>
          </ul>
        </Container>
      </Container>
    )
  }
}

export default About
