import React from 'react'
import { storiesOf } from '@storybook/react'
import { ImageInput } from '.'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Atoms|ImageInput', module)

stories.add('Default', () => (
  <ImageInput onFileSelect={action('File Select')} />
))
