import React from 'react'
import { Grid, Image, Container} from 'semantic-ui-react'

const Footer = (props) => {
  const { Column, Row } = Grid
  return (
      <div  className="footer-wrapper">
        <div className="App-footer">
          <Grid>
            <Row>
              <Column width={5}>
                (C) 2017 - [name]
              </Column>
              <Column width={6}>
                Website designed by Julian Gommans, hosted by Awardspace.
              </Column>
              <Column width={5}>
                Photo by Kimberly Farmer on Unsplash
              </Column>
            </Row>
          </Grid>
        </div>
      </div>
  )
}

export default Footer
