import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Label/Label.js'

const Input = ({ labelName, type, name, value, onChange }) => {
  return (
    <div>
      <Label
        labelName={labelName}
      />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
  type: 'text'
}

export default Input
