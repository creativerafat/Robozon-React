import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card3-text">{props.title}</h2>
      <span className="feature-card3-text1">{props.description}</span>
    </div>
  )
}

FeatureCard3.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  rootClassName: '',
  title: 'Lorem ipsum',
}

FeatureCard3.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard3
