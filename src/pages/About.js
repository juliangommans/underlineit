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
            Underline It is owned and operated by [full-name].  [first-name] has over 10 years experience as a university academic, translator, author and [former employment] (although [gendered pronoun] is no longer [verb for previous employment]).
          </Subheader>
        </Header>
        <Container textAlign="left">
          <Header as="h3">
            Qualifications:
          </Header>
          <ul>
            <li>[degree]</li>
            <li>[second degree]</li>
            <li>ATCL (Associate of Trinity College, London)</li>
          </ul>
        </Container>
      </Container>
    )
  }
}

export default About
