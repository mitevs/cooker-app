import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import FormControl from '../FormControl'

const stories = storiesOf('Molecules|FormControl', module)

stories.add('Default', () => (
  <FormControl
    error={text('Error', '')}
    name={text('Name', 'firstName')}
    label={text('Label', 'First Name')}
    value={text('Value', 'Stefan')}
    onChange={action('onChange')}
  />
))
