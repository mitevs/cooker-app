import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { Icon, IconType } from '.'

const stories = storiesOf('Atoms|Icon', module)

stories.add('Default', () => (
  <Icon
    type={select(
      'Type',
      [IconType.arrowDown, IconType.arrowUp],
      IconType.arrowUp
    )}
    size={select(
      'Size',
      {
        Normal: undefined,
        Small: 'small',
        Big: 'big',
      },
      undefined
    )}
  />
))
