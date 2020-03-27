import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from '.'

const stories = storiesOf('Atoms|Text', module)

stories.add('Default', () => <Text />)
