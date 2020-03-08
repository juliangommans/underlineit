import React, { Component } from 'react'
import ServicesComponent from '../components/ServicesComponent'

class Editing extends Component {
  render (){
    return (
      <ServicesComponent
        title='Editing'
        firstParagraph='We specialise in editing a wide variety of written materials to ensure consistency in the structure, content and overall flow of a document.  Our editing expertise includes:'
        bullets={[
          "Novels",
          "Non-fiction books",
          "Website and advertising copy",
          "Marketing and comms",
          "Magazines and newsletters",
          "Complex / technical documents"
        ]}
        image='https://images.unsplash.com/photo-1542426144-3e6c375380e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
      />
    )
  }
}

export default Editing
