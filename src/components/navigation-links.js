import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" href="/" className="navigation-links-navlink navbar-link">
        {props.text}
      </Link>
      <span href="#about" className="navigation-links-text navbar-link">
        {props.text1}
      </span>
      <a href="#download" className="navigation-links-link navbar-link">
        {props.text2}
      </a>
      <span href="#tutorials" className="navigation-links-text1 navbar-link">
        {props.text3}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Download',
  text3: 'Tutorials',
  rootClassName: '',
  text: 'Home',
  text1: 'About',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
