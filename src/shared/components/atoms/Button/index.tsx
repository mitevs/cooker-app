import React, { FC, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './styles.scss'
import useStyles from 'isomorphic-style-loader/useStyles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'primary'
}

export const Button: FC<ButtonProps> = ({
  children,
  buttonStyle,
  className,
  ...props
}) => {
  useStyles(styles)

  return (
    <button
      className={clsx(
        styles.button,
        buttonStyle && styles[buttonStyle],
        className
      )}
      {...props}>
      {children}
    </button>
  )
}
