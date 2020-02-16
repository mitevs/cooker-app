import React, { FC, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  useStyles(styles)
  return <input className={clsx(styles.input, className)} {...props} />
}
