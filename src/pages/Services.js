import React, { Component } from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

class Services extends Component {

  render (){
    const { Subheader } = Header
      const { Column, Row } = Grid
    return (
      <Container>
        <Header>
          <Subheader className="minor-padding">
            Underline It provides professional, efficient and top quality proofreading, editing and writing services throughout New Zealand.
          </Subheader>
        </Header>
        <Container textAlign="left">
          <Grid>
            <Row className="stackable-columns">
              <Column width="5">
                <Header as="h3">
                  Editing
                </Header>
                <ul>
                  <li>Novels</li>
                  <li>Non-fiction books</li>
                  <li>Website copy</li>
                  <li>Marketing and comms</li>
                  <li>Magazines and newsletters</li>
                  <li>Something else? Get in touch</li>
                </ul>
              </Column>
              <Column width="5">
                <Header as="h3">
                  Proofreading
                </Header>
                <ul>
                  <li>Academic theses</li>
                  <li>Complex / legal documents (please note legal advice will not be provided)</li>
                  <li>Assignments</li>
                  <li>Novels</li>
                  <li>Non-fiction books</li>
                  <li>Website copy</li>
                  <li>Marketing and comms</li>
                  <li>Magazines and newsletters</li>
                  <li>Something else? Get in touch</li>
                </ul>
              </Column>
              <Column width="5">
                <Header as="h3">
                  Writing
                </Header>
                <ul>
                  <li>If you need a hand putting pen to paper, get in touch to see if we can help</li>
                </ul>
              </Column>
              <Column width="1" />
            </Row>
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default Services
