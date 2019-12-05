import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import { colors, fontSize, sizes } from '@shared/style'

// style component and remove this css import
import 'react-datepicker/dist/react-datepicker.css'

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid ${colors.grayDark1};
  border-radius: ${sizes.borderRadius};
  background: ${colors.white};
  color: ${colors.grayDark};
  padding: ${sizes.basePadding};
  font-size: ${fontSize.base};
  box-sizing: border-box;
  outline: none;
  max-width: 100%;
  position: relative;
`
