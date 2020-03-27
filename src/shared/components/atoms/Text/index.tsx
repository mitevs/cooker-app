import React, { FC, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const Text: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => {
  useStyles(styles)
  return <textarea className={clsx(styles.textarea, className)} {...props} />
}
