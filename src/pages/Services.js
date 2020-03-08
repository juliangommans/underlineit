import React, { Component } from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Services extends Component {

  render (){
    const { Subheader } = Header
    const { Column, Row } = Grid
    return (
      <Container>
        <Header as="h2">

          <Subheader className="minor-padding">
            Underline It: Writing, Editing & Proofreading is based in Wellington, New Zealand.  We are experts at writing and copywriting, editing, and proofreading.  Our services are professional and efficient, and we pride ourselves on our style, attention to detail, and way with words.
          </Subheader>

        </Header>
        <Container textAlign="left">
          <Grid>
            <Row className="stackable-columns">
              <Column width="5">
                <Header as="h3">
                  <Link className="underlinelink" to="/writing-copywriting">Writing / Copywriting</Link>
                </Header>
              </Column>

              <Column width="4">
                <Header as="h3">
                  <Link className="underlinelink" to="/editing">Editing</Link>
                </Header>
              </Column>

              <Column width="6">
                <Header as="h3">
                  <Link className="underlinelink" to="/proofreading">Proofreading</Link>
                </Header>
              </Column>

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
