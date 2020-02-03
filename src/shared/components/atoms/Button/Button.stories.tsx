import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'
import { Button } from '.'

const stories = storiesOf('Atoms|Button', module)

stories.add('Default', () => (
  <Button
    onClick={action('click')}
    buttonStyle={select(
      'Button Style',
      {
        None: undefined,
        Primary: 'primary',
      },
      'primary'
    )}>
    {text('Label', 'Button')}
  </Button>
))
