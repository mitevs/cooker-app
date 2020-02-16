import React, { FC, useState } from 'react'
import clsx from 'clsx'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export const DatePickerInput: FC<ReactDatePickerProps> = ({
  value,
  onChange,
  className,
  ...props
}) => {
  useStyles(styles)
  const [date, setDate] = useState<Date>(value ? new Date(value) : new Date())

  return (
    <DatePicker
      className={clsx(styles.datePicker, className)}
      selected={date}
      onChange={(date, event) => {
        onChange(date, event)

        if (date) {
          setDate(date)
        }
      }}
      {...props}
    />
  )
}
