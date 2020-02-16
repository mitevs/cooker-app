import React, { FC } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const Sign: FC = ({ children }) => {
  useStyles(styles)
  return <span className={styles.sign}>{children}</span>
}

export const InputGroup: FC = ({ children }) => {
  useStyles(styles)
  return <div className={styles.inputGroup}>{children}</div>
}
