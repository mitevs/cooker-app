import React, { FC } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const Footer: FC = () => {
  useStyles(styles)
  return <footer className={styles.footer}>footer</footer>
}
