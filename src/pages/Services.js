import React, { Component } from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

class Services extends Component {

  render (){
    const { Subheader } = Header
      const { Column, Row } = Grid
    return (
      <Container>
        <Header as="h2">

          <Subheader className="minor-padding">
            Underline It is based in Wellington, New Zealand.  We provide professional and efficient services.  
          </Subheader>

        </Header>
        <Container textAlign="left">
          <Grid>
            <Row className="stackable-columns">
              <Column width="7">
                <Header as="h3">
                  Editing and Proofreading
                </Header>
                <ul>
                  <li>Novels</li>
                  <li>Non-fiction books</li>
                  <li>Website and advertising copy</li>
                  <li>Marketing and comms</li>
                  <li>Magazines and newsletters</li>
                  <li>Academic theses</li>
                  <li>Complex / technical documents</li>
                  <li>...and anything else you might need</li>
                </ul>
              </Column>
              <Column width="7">
                <Header as="h3">
                  Writing
                </Header>
                We specialise in writing with style and precision, so that you can feel confident in what you publish.  If you need a hand putting pen to paper, get in touch to see how we can help.
              </Column>
              <Column width="1" />
            </Row>
            <Row className="bottom-row">
              <Column>
                Our costs vary depending on the work involved.  We are happy to talk with you about your individual needs, and then provide you with a tailored quote.
              </Column>
            </Row>
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default Services
