import React, { useState } from 'react'
import { StyledDatePicker } from './styles/DatePicker'

interface DatePickerProps {
  className?: string
  onChange?: (value: Date | null) => void
  value?: Date
}

const DatePickerInput: React.FC<DatePickerProps> = ({
  className,
  value = new Date(),
  onChange,
}) => {
  const [date, setDate] = useState<Date | null>(value)

  return (
    <StyledDatePicker
      className={className}
      selected={date}
      onChange={(date) => {
        if (onChange) {
          onChange(date)
        }

        setDate(date)
      }}></StyledDatePicker>
  )
}

export { DatePickerInput }
