import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

class About extends Component {

  render (){
    const {Subheader} = Header
    return (
      <Container>
        <Header as="h2">
          About
          <Subheader>
            <p>Underline It is owned and operated by Louisa Gommans.  Louisa has many years of experience as a university academic, translator, author and commercial lawyer.  While practising law part time, Louisa also provides freelance editing, proofreading and writing services.</p>
          </Subheader>
        </Header>
        <Container textAlign='left'>
          <p>Louisa’s hugely varied experience and qualifications include:</p>
          <ul>
            <li>LLB (Victoria University)</li>
            <li>BA Hons in Italian Language, Art History and European Studies (Victoria University)</li>
            <li>ATCL Performance Piano (Trinity College, London)</li>
            <li>Author of art crime related articles and a chapter in “Art Crime and Its Prevention: A Handbook”)</li>
            <li>Choral singer (Orpheus Choir of Wellington, Supertonic Choir)</li>
            <li>Founding Trustee and Secretary of the New Zealand Art Crime Research Trust</li>
            <li>Involvement in many arts groups including Friends of the Dowse Committee, the C Art Trust</li>
            <li>Former intern in the Karanga Aotearoa Repatriation Team at Te Papa</li>
          </ul>
        </Container>
      </Container>
    )
  }
}

export default About
