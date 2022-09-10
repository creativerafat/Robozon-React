import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink navbar-link">
        {props.text}
      </Link>
      <Link
        to="/"
        href="#about"
        className="navigation-links-navlink1 navbar-link"
      >
        {props.text1}
      </Link>
      <Link
        to="/"
        href="#download"
        className="navigation-links-navlink2 navbar-link"
      >
        {props.text2}
      </Link>
      <Link
        to="/"
        href="#tutorials"
        className="navigation-links-navlink3 navbar-link"
      >
        {props.text3}
      </Link>
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
