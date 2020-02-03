import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { Label } from '.'

const stories = storiesOf('Atoms|Label', module)

stories.add('Default', () => (
  <Label error={boolean('Error', false)}>{text('Label', 'Label')}</Label>
))
