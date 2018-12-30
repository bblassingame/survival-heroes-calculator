import React from 'react'
import ReactDOM from 'react-dom'

import App from './application/application'

import ScrollToTop from './utility/scroll-to-top'

import './reset.css'
import './base-styles.css'

ReactDOM.render(
  <ScrollToTop>
    <App />
  </ScrollToTop>, document.getElementById('main')
)