import React from 'react'
import PropTypes from 'prop-types'

export const Item = ({ column, row, children }) => {
  const position = {
    gridRow: row,
    gridColumn: column
  }

  return (
    <div className='react-bracket-item' style={position}>
      {children}
    </div>
  )
}

Item.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  children: PropTypes.any
}
