import React from 'react'
import ReactDOM from 'react-dom'
import { Router, withRouter, HashRouter } from 'react-router-dom'
import history from './history'
import './index.css'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import registerServiceWorker from './registerServiceWorker'

const MainApp = withRouter(props => <App {...props}/>)

ReactDOM.render((
  <HashRouter history={history}>
    <MainApp />
  </HashRouter>), document.getElementById('root')
)
registerServiceWorker()
