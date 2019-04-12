import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter } from 'react-router-dom'
import App from './layout/App'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
