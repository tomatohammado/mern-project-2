import React from 'react'
// import PropTypes from 'prop-types'

const Miniature = ({name, imageUrl}) => {
  let imgSrc = `/assets/images/${imageUrl}`
  return (
    <div className='col s6'>
      <a href='/miniatures/{{miniature._id}}'>
        <div className='container-miniature-item'>
          <header>
            <h2 className='flow-text'>{name}</h2>
          </header>
          <img src={imgSrc} alt={name} />
        </div>
      </a>
    </div>
  )
}

export default Miniature
