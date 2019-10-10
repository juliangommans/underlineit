import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Header = (props) => {
  const { Column, Row } = Grid
  return (
    <Row className='App-header un-padded-row'>
      <Column>
        <div className='banner-image'/>
        <Image
          className='header-image'
          src='favicon.png'
        />
      </Column>
    </Row>
  )
}

export default Header
