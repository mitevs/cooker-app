import styled from 'styled-components'
import { Input } from '@shared/components/atoms/Input'
import { StyledDatePicker } from '@shared/components/atoms/DatePickerInput/styles/DatePicker'
import { StyledSign } from './Sign'

const StyledInputGroup = styled.div`
  display: flex;

  ${StyledSign} {
    order: 1;
    max-height: 36px;
    box-sizing: border-box;
  }

  ${Input}, > div {
    order: 2;
  }

  ${Input}, ${StyledDatePicker} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export { StyledInputGroup }
