import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputGroup, Sign } from '.'
import { Input } from '@shared/components/atoms/Input'
import { DatePickerInput } from '@shared/components/atoms/DatePickerInput'
import { Icon, IconType } from '@shared/components/atoms/Icon'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Molecules|InputGroup', module)

stories.add('Default', () => (
  <InputGroup>
    <Sign>
      <Icon type={IconType.arrowDown} />
    </Sign>
    <Input />
  </InputGroup>
))

stories.add('DatePicker', () => (
  <InputGroup>
    <Sign>
      <Icon type={IconType.arrowDown} />
    </Sign>
    <DatePickerInput onChange={action('file change')} />
  </InputGroup>
))
