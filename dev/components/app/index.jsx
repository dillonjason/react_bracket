import React from 'react'

import { ReactBracket } from '../../../src/index'
import { props } from '../../props'

import styles from './styles'

export const App = () => (
  <div className={styles.devApp}>
    <ReactBracket {...props} />
  </div>
)
