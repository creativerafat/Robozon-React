import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import PrivacyPolicy from './views/privacy-policy'
import CookiePolicy from './views/cookie-policy'
import Home from './views/home'
import TermsConditions from './views/terms-conditions'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={CookiePolicy} exact path="/cookie-policy" />
        <Route component={Home} exact path="/" />
        <Route component={TermsConditions} exact path="/terms-conditions" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
