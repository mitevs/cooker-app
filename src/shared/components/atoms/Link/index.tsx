import React, { FC } from 'react'
import clsx from 'clsx'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const Link: FC<RouterLinkProps> = ({
  children,
  className,
  ...props
}) => {
  useStyles(styles)

  return (
    <RouterLink {...props} className={clsx(styles.link, className)}>
      {children}
    </RouterLink>
  )
}
