import React from 'react'
import { Grid, Image, Container} from 'semantic-ui-react'

const Footer = (props) => {
  const { Column, Row } = Grid
  return (
      <div  className="footer-wrapper">
        <div className="App-footer">
          <Grid>
            <Row>
              <Column width={8}>
                (C) 2017 - [name]
              </Column>
              <Column width={8}>
                Website design Julian Gommans.
              </Column>
            </Row>
          </Grid>
        </div>
      </div>
  )
}

export default Footer
