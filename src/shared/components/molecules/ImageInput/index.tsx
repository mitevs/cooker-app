import React, { FC, InputHTMLAttributes, useState, createRef } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
  height?: number
  crop?: boolean
  onFileSelect?: (file: File) => void
}

const placeholderURL =
  'https://via.placeholder.com/480x320.png?text=Click+To+Upload+Image'

export const ImageInput: FC<ImageInputProps> = ({
  width = 480,
  height = 320,
  className,
  onFileSelect,
}) => {
  useStyles(styles)

  const reader = new FileReader()
  const inputRef = createRef<HTMLInputElement>()
  const [imgSrc, setImgSrc] = useState(placeholderURL)

  reader.onload = function(e: any) {
    setImgSrc(e.target.result)
  }

  const handleFileChange = (files: FileList | null): void => {
    if (files) {
      // check file type

      const file = files[0]
      reader.readAsDataURL(file)

      if (onFileSelect) {
        onFileSelect(file)
      }
    }
  }

  return (
    <div
      className={className}
      onClick={() => inputRef.current && inputRef.current.click()}>
      <img className={styles.img} width={width} height={height} src={imgSrc} />
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        onChange={({ target: { files } }) => handleFileChange(files)}
        accept="image/*"
      />
    </div>
  )
}
