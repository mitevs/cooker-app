import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { DatePickerInput } from '.'

const stories = storiesOf('Atoms|DatePickerInput', module)

stories.add('Default', () => <DatePickerInput onChange={action('change')} />)
