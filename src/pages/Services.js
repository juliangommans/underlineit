import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

class Services extends Component {

  render (){
    const {Subheader} = Header
    return (
      <Container>
        <Header as="h2">
          Services
          <Subheader>
            Underline It provides professional, efficient and top quality proofreading, editing and writing services throughout New Zealand.
          </Subheader>
        </Header>
        <Container textAlign="left">
          <Header as="h3">
            Proofreading
          </Header>
          <ul>
            <li>Academic theses*</li>
            <li>Complex / legal documents (please note legal advice will not be provided)</li>
            <li>Assignments</li>
            <li>Novels</li>
            <li>Non-fiction books</li>
            <li>Website copy</li>
            <li>Marketing and comms</li>
            <li>Magazines or newsletters</li>
            <li>Something else? Get in touch</li>
          </ul>
        </Container>
      </Container>
    )
  }
}

export default Services
