import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

class About extends Component {

  render (){
    const {Subheader} = Header
    return (
      <Container>
        <Header as="h2">
          <Subheader>
            <p>Underline It is owned and operated by Lou Gommans.  Lou has many years of experience as a researcher, translator, writer, and former commercial lawyer.</p>
          </Subheader>
        </Header>
        <Container textAlign='left'>
          <p>Lou’s hugely varied experience and qualifications include:</p>
          <ul>
            <li>LLB (Victoria University)</li>
            <li>BA Hons. in Italian Language, Art History, and European Studies (Victoria University)</li>
            <li>Admitted as a Barrister and Solicitor of the High Court of New Zealand (not currently practising)</li>
            <li>ATCL Performance Piano (Trinity College, London), choral singer, and musician</li>
            <li>Author of various legal and art crime related articles, and a chapter in “Art Crime and Its Prevention: A Handbook”</li>
            <li>Founding Trustee and Secretary of the New Zealand Art Crime Research Trust</li>
            <li>Involvement in many not-for-profit and charitable arts organisations</li>
          </ul>
        </Container>
        </Container>
    )
  }
}

export default About
