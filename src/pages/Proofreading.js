import React, { Component } from 'react'
import ServicesComponent from '../components/ServicesComponent'

class Proofreading extends Component {
  render (){
    return (
      <ServicesComponent
        title='Proofreading'
        firstParagraph='We are experts in proofreading written materials to ensure that correct spelling, grammar, and punctuation is used.  We are happy to receive documents in electronic (Word) or hard copy format, and can provide our suggested changes in writing or by way of electronic mark up (track changes).'
        secondParagraph='When proofreading we will check for and correct:'
        bullets={[
          "Grammar",
          "Punctuation",
          "Spelling",
          "Use of capital letters",
          "Spacing ",
          "Font use (consistency of style and size)",
          "Table of contents, correct placement of and reference to any diagrams or appendices ",
          "Page layout (headers, footers, page numbers)",
          "Footnotes and references",
          "Internal consistency",
          "Anything else you might ask us to look at."
        ]}
        image='https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
        finalParagraph='When proofreading we will not suggest improvements to wording or overall structure / flow of your document (as this would be editing rather than proofreading).  However, if we consider that your document may need to be edited, we will discuss this with you.'
      />
    )
  }
}

export default Proofreading
