import React, { Component } from 'react'
import { Container, Header as Hbox, Card } from 'semantic-ui-react'

class Services extends Component {

  render (){
    const {Group, Header, Content} = Card
    return (
      <Container>
        <Hbox>
          This is a list of services
        </Hbox>
        <Group stackable>
          <Card>
            <Header>
              Proofreading
            </Header>
            <Content>
              I can has proofread good
            </Content>
          </Card>
          <Card>
            <Header>
              Spelling Check
            </Header>
            <Content>
              No tipoes on my wach
            </Content>
          </Card>
          <Card>
            <Header>
              Personal Trainer
            </Header>
            <Content>
              JUST KIDDING
            </Content>
          </Card>
        </Group>
      </Container>
    )
  }
}

export default Services
