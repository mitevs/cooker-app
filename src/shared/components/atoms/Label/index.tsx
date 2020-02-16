import React, { FC, LabelHTMLAttributes } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  error?: boolean
}

export const Label: FC<LabelProps> = ({ error, children, className }) => {
  useStyles(styles)

  return (
    <label className={clsx(styles.label, error && styles.error, className)}>
      {children}
    </label>
  )
}
