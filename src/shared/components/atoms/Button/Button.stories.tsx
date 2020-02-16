import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { Button } from '.'

const stories = storiesOf('Atoms|Button', module)

stories.add('Default', () => (
  <Button onClick={action('click')} buttonStyle="primary">
    {text('Label', 'Button')}
  </Button>
))
