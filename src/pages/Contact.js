import React, { Component } from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

class Contact extends Component {

  render (){
    const { Subheader } = Header
    return (
      <Container>
        <Header as="h2">
          <Subheader>
            We would love to hear from you with a writing, editing, or proofreading enquiry. Please get in touch by email to <a href="mailto:underlineitnz@gmail.com">underlineitnz@gmail.com</a> 
          </Subheader>
        </Header>
        <p><a href='https://www.facebook.com/underlineitnz/'><Icon name='facebook' /> Facebook</a></p>
        <p><a href='https://www.linkedin.com/in/louisagommans/'><Icon name='linkedin square' /> Linkedin</a></p>
        <p><a href='https://https://www.instagram.com/underlineit_nz/?hl=en'><Icon name='instagram' /> Instagram</a></p>

      </Container>
    )
  }
}

export default Contact
