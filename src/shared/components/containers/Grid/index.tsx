import React, { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  rows: number
  cols: number
}

export const GridItem: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>

export const Grid: FC<GridProps> = ({ rows, cols, className, children }) => {
  useStyles(styles)
  return (
    <div
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
      className={clsx(styles.grid, className)}>
      {children}
    </div>
  )
}
