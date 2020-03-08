import React from 'react'
import { Header, Image, Container, Grid } from 'semantic-ui-react'

const ServicesComponent = (props) => {
  const { Column, Row } = Grid
  const {
    title,
    firstParagraph,
    secondParagraph,
    bullets = [],
    finalParagraph,
    image
  } = props
  return (
      <Container className='services-component-container'>
        <Header as="h2">{title}</Header>
        <p>{firstParagraph}</p>
        {
          !!secondParagraph &&
            <p>{secondParagraph}</p>
        }
        {
          bullets.length > 0 &&
          <Grid>
            <Row className="stackable-columns">
              <Column width="8">
                <ul className="stackable-component-ul">
                  {
                    bullets.map((bp) => (
                      <li>{bp}</li>
                    ))
                  }
                </ul>
              </Column>
              <Column width='7'>
                <img
                  src={image}
                  className="servicescomponentimage"
                  alt="Lou Gommans Writer Copywriter Editor Proofreader New Zealand Wellington"
                />
              </Column>
            </Row>
          </Grid>
        }
        {
          !!finalParagraph &&
            <p>{finalParagraph}</p>
        }
        {
          bullets.length < 1 &&
            <img
              src={image}
              className="servicescomponentimage"
              alt="Lou Gommans Writer Copywriter Editor Proofreader New Zealand Wellington"
            />
        }
      </Container>
  )
}

export default ServicesComponent
