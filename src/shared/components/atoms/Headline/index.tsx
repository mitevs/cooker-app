import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './styles/Header'
import { AnyStyledComponent } from 'styled-components'

type HeadlineProps = {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

const getHeadlineLevel = (level): AnyStyledComponent => {
  switch (level) {
    case 'h1':
      return H1
    case 'h2':
      return H2
    case 'h3':
      return H3
    case 'h4':
      return H4
    case 'h5':
      return H5
    case 'h6':
      return H6
    default:
      return H1
  }
}

const Headline: React.FC<HeadlineProps> = ({ level, children, className }) => {
  const HTag = getHeadlineLevel(level)
  return <HTag className={className}>{children}</HTag>
}

export default Headline
