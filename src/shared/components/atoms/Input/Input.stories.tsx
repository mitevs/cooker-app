import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '.'

const stories = storiesOf('Atoms|Input', module)

stories.add('Default', () => <Input />)
