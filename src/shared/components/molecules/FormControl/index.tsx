import React, { FC, InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Label } from '@shared/components/atoms/Label'
import { Input } from '@shared/components/atoms/Input'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface FormControlProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const FormControl: FC<FormControlProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  useStyles(styles)

  return (
    <div className={clsx(styles.formControl, className)}>
      <Label error={!!error}>{label}</Label>
      <Input className={clsx(styles.input, error && styles.error)} {...props} />
    </div>
  )
}
