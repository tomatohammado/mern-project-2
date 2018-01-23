import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, classes, content }) => {
  return (
    <button type={type} className={classes}>{content}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Button
