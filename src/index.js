import React from 'react'
import ReactDOM from 'react-dom'
import { Router, withRouter } from 'react-router-dom'
import history from './history'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import registerServiceWorker from './registerServiceWorker'

const MainApp = withRouter(props => <App {...props}/>)

ReactDOM.render((
  <Router history={history}>
    <MainApp />
  </Router>), document.getElementById('root')
)
registerServiceWorker()
