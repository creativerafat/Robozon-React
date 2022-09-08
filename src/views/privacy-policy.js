import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>PrivacyPolicy - Robozon</title>
        <meta property="og:title" content="PrivacyPolicy - Robozon" />
      </Helmet>
      <Navbar></Navbar>
    </div>
  )
}

export default PrivacyPolicy
