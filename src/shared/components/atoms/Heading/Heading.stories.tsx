import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { Heading } from '.'

const stories = storiesOf('Atoms|Heading', module)

stories.add('Default', () => (
  <Heading level={select('Select', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}>
    {text('Heading', 'Example')}
  </Heading>
))
