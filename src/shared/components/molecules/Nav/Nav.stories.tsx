import React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from '@shared/components/atoms/Link'
import { Nav } from '.'

const stories = storiesOf('Molecules|Nav', module)

stories.add('Default', () => {
  return (
    <Nav>
      <Link to="#">Link 1</Link>
      <Link to="#">Link 2</Link>
      <Link to="#">Link 3</Link>
    </Nav>
  )
})
