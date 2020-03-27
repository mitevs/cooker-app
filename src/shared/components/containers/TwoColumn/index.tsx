import React, { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const LeftColumn: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>

export const RightColumn: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>

export interface TwoColumnProps extends HTMLAttributes<HTMLDivElement> {
  layout?: 'expand-left' | 'expand-right'
}

export const TwoColumn: FC<TwoColumnProps> = ({
  children,
  className,
  layout,
  ...props
}) => {
  useStyles(styles)

  return (
    <div
      className={clsx(
        styles.twoColumn,
        className,
        styles[`twoColumn--${layout}`]
      )}
      {...props}>
      {children}
    </div>
  )
}
