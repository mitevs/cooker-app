import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { Headline } from '.'

const stories = storiesOf('Atoms|Headline', module)

stories.add('Default', () => (
  <Headline
    level={select('Select', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}>
    {text('Headline', 'Example')}
  </Headline>
))
