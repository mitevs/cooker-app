import { useState, ChangeEvent } from 'react'

export const useInput = <T = string>(
  initValue?: T
): [
  T | undefined,
  (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
] => {
  const [value, setValue] = useState<T | undefined>(initValue)

  const handleIputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    let newValue: any = e.target.value

    const num = Number.parseInt(newValue)

    if (!Number.isNaN(num)) {
      newValue = num
    }

    setValue((newValue as unknown) as T)
  }

  return [value, handleIputChange]
}
