import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Header = (props) => {
  const { Column, Row } = Grid
  return (
    <Row className="App-header">
      <Column>
        <Image
          className="header-image"
          size="medium"
          src="assets/images/banner-logo.png"
        />
      </Column>
    </Row>
  )
}

export default Header
