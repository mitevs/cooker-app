import React from 'react'
import { StyledIcon } from './styles/Icon'
import ArrowUp from './svg/arrow-up.svg'
import ArrowDown from './svg/arrow-down.svg'

export enum IconType {
  arrowUp = 'arrow-up',
  arrowDown = 'arrow-down',
}

export interface IconProps {
  type: IconType
  size?: 'small' | 'big'
  pointer?: boolean
  onClick?: (e?: React.MouseEvent) => void
  className?: string
}

const ICON_MAP = {
  [IconType.arrowUp]: ArrowUp,
  [IconType.arrowDown]: ArrowDown,
}

const Icon: React.FC<IconProps> = ({
  type,
  size,
  pointer,
  onClick,
  className,
}) => {
  const SvgIcon = ICON_MAP[type]

  return (
    <StyledIcon
      className={className}
      size={size}
      pointer={pointer}
      onClick={onClick}>
      <SvgIcon></SvgIcon>
    </StyledIcon>
  )
}

export { Icon }
