import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

export const Container = ({ children, columns, rows }) => {
  const template = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 100px)`
  }

  return (
    <div className={`react-bracket-container ${styles.container}`} style={template}>
      {children}
    </div>
  )
}

Container.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
}
