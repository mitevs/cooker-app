import React, { FC, InputHTMLAttributes, useState, createRef } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
  height?: number
  crop?: boolean
  onFilesSelect?: (files: File[]) => void
}

const placeholderURL =
  'https://via.placeholder.com/480x320.png?text=Click+To+Upload+Image'

export const ImageInput: FC<ImageInputProps> = ({
  width = 480,
  height = 320,
  className,
  onFilesSelect,
}) => {
  useStyles(styles)

  const inputRef = createRef<HTMLInputElement>()
  const [images, setImages] = useState<string>([])

  const handleFileChange = (files: FileList | null): void => {
    if (files) {
      let index = 0
      const reader = new FileReader()
      const readImages: any[] = []

      reader.onload = () => {
        readImages.push(reader.result)

        if (index < files.length) {
          reader.readAsDataURL(files[index++])
        } else {
          setImages(readImages)
        }
      }

      reader.readAsDataURL(files[index++])
    }
  }

  return (
    <div className={className}>
      {images.map((image, i) => (
        <img
          key={i}
          className={styles.img}
          width={width}
          height={height}
          src={image}
        />
      ))}

      <img
        onClick={() => inputRef.current && inputRef.current.click()}
        className={styles.img}
        width={width}
        height={height}
        src={placeholderURL}
      />

      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        onChange={({ target: { files } }) => handleFileChange(files)}
        accept="image/*"
        multiple
      />
    </div>
  )
}
