import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import InputGroup from '.'

const stories = storiesOf('Molecules|InputGroup', module)

stories.add('Default', () => (
  <InputGroup
    label={text('Sign', '$')}
    modifiers={boolean('Right', false) ? 'right' : ''}
  />
))
