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
        <p>Phone: 027 319 4240</p>
        <p><a style={{color: 'black'}} href='https://www.facebook.com/underlineitnz/'><Icon color='blue' name='facebook' /> Facebook</a></p>

      </Container>
    )
  }
}

export default Contact
