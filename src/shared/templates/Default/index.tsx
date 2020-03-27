import React, { FC, Fragment, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Header } from '@shared/components/organisms/Header'
import { Footer } from '@shared/components/organisms/Footer'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface DefaultProps extends HTMLAttributes<HTMLDivElement> {
  hasHeader?: boolean
  hasFooter?: boolean
}

export const Default: FC<DefaultProps> = ({
  hasHeader = true,
  hasFooter = true,
  className,
  children,
}) => {
  useStyles(styles)

  return (
    <Fragment>
      {hasHeader ? <Header></Header> : null}
      <main className={clsx(styles.main, className)}>{children}</main>
      {hasFooter ? <Footer></Footer> : null}
    </Fragment>
  )
}
