import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

class About extends Component {

  render (){
    const {Subheader} = Header
    return (
      <Container>
        <Header as="h2">
          <Subheader>
            <p>Underline It: Writing, Editing & Proofreading is owned and operated by Lou Gommans.  Lou has many years of experience as a writer, researcher, translator, and former commercial lawyer.</p>
          </Subheader>
        </Header>
        <Container textAlign='left'>
          <p>Lou graduated from Victoria University of Wellington with a Bachelor of Laws and a Bachelor of Arts with First Class Honours in Italian Language, History of Art, and European Studies.  She was admitted as a Barrister and Solicitor of the High Court of New Zealand in 2013, and practised for a number of years as a commercial lawyer, both in-house and in private practice. Lou specialised in providing exceptional legal advice on a wide range of matters to individuals, businesses, and charities and not-for-profit organisations.</p>
          <img
            src={require('../images/Louisa.png')}
            className='headshot'
            align='left'
          />
          <p>Lou has a special interest in the study of art crime, and is a founding trustee of the New Zealand Art Crime Research Trust.  She has researched and written about art crime and arts law related topics, including a chapter in an international art crime handbook and various articles for the New Zealand legal community.  While completing her studies Lou worked as an intern with the Karanga Aotearoa Repatriation Programme at Te Papa Tongarewa Museum of New Zealand, a role which included translation of documents into and from Italian.  Lou's honours thesis focussed on issues of ethnographic translation involving Italian, English, and Maori.</p>
          <p>Lou is a passionate musician with extensive experience as a pianist and choral musician.  She holds an Associate qualification in performance piano from Trinity College London, plays the drums, and has sung as a soprano in several choirs including the Orpheus Choir of Wellington.</p>
          <p>She is now mother to two young boys, and so working as a freelance writer, editor, and proofreader capitalises on her attention to detail, analytical skills and clever way with words.  It also allows for flexibility around family committments.</p>
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
          <p>You can read more about Lou on her LinkedIn page <a href="https://www.linkedin.com/company/13667143/admin/">here.</a></p>
        </Container>
        </Container>
    )
  }
}

export default About
