import React, { FC } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import { Input } from '@shared/components/atoms/Input'
import { useInput } from '@shared/hooks/useInput'
import styles from './styles.scss'

export interface StepInputProps {
  order: number
  img?: string
  onImageClick: Function
  onChange: (step: StepInput) => void
  className?: string
}

export const StepInput: FC<StepInputProps> = ({
  order,
  img,
  className,
  onImageClick,
  onChange,
}) => {
  useStyles(styles)

  img = img || 'http://placekitten.com/360/180'

  const [title, onTitleChange] = useInput()
  const [text, onTextChange] = useInput()

  return (
    <div className={clsx(styles.stepInput, className)} data-order={order}>
      <img
        className={styles.stepImage}
        src={img}
        onClick={() => onImageClick()}
      />
      <Input
        className={styles.stepTitle}
        placeholder="Step Title..."
        value={title}
        onChange={onTitleChange}
        onBlur={() =>
          onChange({
            title,
            text,
          })
        }
      />
      <textarea
        className={styles.stepText}
        cols={30}
        rows={10}
        placeholder="Step Instructions..."
        value={text}
        onChange={onTextChange}
        onBlur={() =>
          onChange({
            title,
            text,
          })
        }
      />
    </div>
  )
}
