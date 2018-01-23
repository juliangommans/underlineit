import React, { Component } from 'react'
import { Container, Table, Header as Hbox } from 'semantic-ui-react'

class Contact extends Component {

  render (){
    const { Body, Row, Cell} = Table
    return (
      <Container>
        <Hbox className="underline">
          Contact me through the various channels
        </Hbox>

        <Table basic='very' celled >
          <Body>
            <Row>
              <Cell>
                <Hbox size="small"> Phone: </Hbox>
              </Cell>
              <Cell>
                0271111111
              </Cell>
            </Row>
            <Row>
              <Cell>
                <Hbox size="small"> Email: </Hbox>
              </Cell>
              <Cell>
                Lol@lol.lol
              </Cell>
            </Row>
            <Row>
              <Cell>
                <Hbox size="small"> TwitteR: </Hbox>
              </Cell>
              <Cell>
                how does twitter work again?
              </Cell>
            </Row>
            <Row>
              <Cell>
                <Hbox size="small"> Facebook: </Hbox>
              </Cell>
              <Cell>
                loujigga
              </Cell>
            </Row>
          </Body>
        </Table>
      </Container>
    )
  }
}

export default Contact
