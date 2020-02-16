import React, { FC, Fragment } from 'react'
import { Header } from '@shared/components/organisms/Header'
import { Footer } from '@shared/components/organisms/Footer'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface SingleColumnProps {
  hasHeader?: boolean
  hasFooter?: boolean
}

export const Default: FC<SingleColumnProps> = ({
  children,
  hasHeader = true,
  hasFooter = true,
}) => {
  useStyles(styles)

  return (
    <Fragment>
      {hasHeader ? <Header></Header> : null}
      <main className={styles.main}>{children}</main>
      {hasFooter ? <Footer></Footer> : null}
    </Fragment>
  )
}
