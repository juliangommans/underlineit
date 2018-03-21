import React, { Component } from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

class Contact extends Component {

  render (){
    const { Subheader } = Header
    return (
      <Container>
        <Header as="h2">
          Contact
          <Subheader>
            We would love to hear from you with an editing, proofreading or writing enquiry (and will ensure that it is handled confidentially).
          </Subheader>
        </Header>


        <p>Email: underlineitnz@gmail.com</p>
        <p><a href='https://www.facebook.com/underlineitnz/'><Icon color='blue' name='facebook' /> Facebook</a></p>
        <p><a href='https://www.linkedin.com/in/louisagommans/'><Icon color='blue' name='linkedin square' /> Linkedin</a></p>

      </Container>
    )
  }
}

export default Contact
