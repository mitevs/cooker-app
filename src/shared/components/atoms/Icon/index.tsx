import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

// Icons
import ArrowUp from './svg/arrow-up.svg'
import ArrowDown from './svg/arrow-down.svg'

export enum IconType {
  arrowUp = 'arrow-up',
  arrowDown = 'arrow-down',
}

export interface IconProps extends HTMLAttributes<HTMLElement> {
  type: IconType
  size?: 'small' | 'big'
  pointer?: boolean
}

const ICON_MAP = {
  [IconType.arrowUp]: ArrowUp,
  [IconType.arrowDown]: ArrowDown,
}

export const Icon: React.FC<IconProps> = ({
  type,
  size,
  pointer,
  className,
  ...props
}) => {
  useStyles(styles)
  const SvgIcon = ICON_MAP[type]

  return (
    <i
      className={clsx(
        styles.icon,
        size && styles[size],
        pointer && styles.pointer,
        className
      )}
      {...props}>
      <SvgIcon></SvgIcon>
    </i>
  )
}
