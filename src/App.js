import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import logo from './logo.svg'

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Footer from './components/Footer'

import Services from './pages/Services'
import About from './pages/About'
import Rates from './pages/Rates'
import Contact from './pages/Contact'
import './App.css'


class App extends Component {
  getActive = () => {
    let path = this.props.location.pathname.slice(1, this.props.location.pathname.length)
    return path.length > 0 ? path : 'home'
  }
  state = { activeItem: this.getActive() }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { Column, Row } = Grid
    return (
      <div className="App">
        <Grid>
          <Header />
          <Row className="padded-row">
            <SideMenu {...this.state} handleItemClick={this.handleItemClick} />
            <Column computer={12} tablet={11} mobile={10}>
              <Switch>
                <Route exact={true} path='/' render={(props) => (
                    <Services {...props} />
                )} />
                <Route path="/rates" render={(props) => (
                    <Rates {...props} />
                )} />
                <Route path="/contact" render={(props) => (
                    <Contact {...props} />
                )} />
                <Route path="/about" render={(props) => (
                    <About {...props} />
                )} />
              </Switch>
            </Column>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
