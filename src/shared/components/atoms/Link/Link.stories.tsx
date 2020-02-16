import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { Link } from '.'

const stories = storiesOf('Atoms|Link', module)

stories.add('Default', () => {
  const href = text('URL', '#')

  return (
    <Link
      to={href}
      onClick={(e) => {
        e.preventDefault()
        action('click')(`go to: ${href}`)
      }}>
      {text('Link Text', 'Link')}
    </Link>
  )
})
