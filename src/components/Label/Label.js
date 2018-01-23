import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ labelName }) => {
  return (
    <label>
      {labelName}
    </label>
  )
}

Label.propTypes = {
  labelName: PropTypes.string.isRequired
}

export default Label
