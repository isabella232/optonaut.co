import React from 'react'
import { render } from 'react-dom'
import { createHistory } from 'history'
import { Router } from 'react-router'
import Routes from './components/Routes'
import FastClick from 'fastclick'

FastClick.attach(document.body)

let history = createHistory()

render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    {Routes}
  </Router>
), document.getElementById('app'))
