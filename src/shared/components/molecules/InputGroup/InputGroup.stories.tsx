import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputGroup } from '.'
import { Input } from '@shared/components/atoms/Input'
import { DatePickerInput } from '@shared/components/atoms/DatePickerInput'
import { Icon, IconType } from '@shared/components/atoms/Icon'

const stories = storiesOf('Molecules|InputGroup', module)

stories.add('Default', () => (
  <InputGroup>
    <InputGroup.Sign>
      <Icon type={IconType.arrowDown} />
    </InputGroup.Sign>
    <Input />
  </InputGroup>
))

stories.add('DatePicker', () => (
  <InputGroup>
    <InputGroup.Sign>
      <Icon type={IconType.arrowDown} />
    </InputGroup.Sign>
    <DatePickerInput />
  </InputGroup>
))
