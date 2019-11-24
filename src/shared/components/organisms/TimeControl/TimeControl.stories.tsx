import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import TimeControl from '.'

const stories = storiesOf('Organisms|TimeControl', module)

stories.add('Default', () => (
  <TimeControl h={number('Hours', 0)} m={number('Minutes', 0)} />
))
