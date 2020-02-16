import React, { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading: FC<HeadingProps> = ({
  level = 'h1',
  children,
  className,
  ...props
}) => {
  useStyles(styles)
  return React.createElement(
    level,
    { ...props, className: clsx(styles[level], className) },
    children
  )
}
