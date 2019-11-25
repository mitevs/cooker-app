import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Label from '.'

const stories = storiesOf('Atoms|Label', module)

stories.add('Default', () => (
  <Label modifiers={boolean('Error', false) ? 'error' : ''}>
    {text('Label', 'Label')}
  </Label>
))
