import React, { FC, useContext, useState } from 'react'
import axios from 'axios'
import clsx from 'clsx'
import { Context } from '@shared/AppContext'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

import { ImageInput } from '@shared/components/molecules/ImageInput'

export interface MediaBayProps {
  isSingleSelect?: boolean
  onSelect?: (file: MediaFile[] | MediaFile) => void
}

export const MediaBay: FC<MediaBayProps> = ({
  isSingleSelect = false,
  onSelect,
}) => {
  useStyles(styles)
  const { user } = useContext(Context)

  const [selected, setSelected] = useState<MediaFile[]>([])

  const selectFile = (file: MediaFile): void => {
    const foundFile = selected.find((f) => f.id === file.id)

    if (isSingleSelect) {
      if (foundFile) {
        setSelected([])
      } else {
        setSelected([file])
      }
    } else {
      const newFiles = [...selected]

      if (foundFile) {
        newFiles.splice(newFiles.indexOf(foundFile), 1)
      } else {
        newFiles.push(file)
      }

      setSelected(newFiles)
    }

    if (onSelect) {
      onSelect(selected)
    }
  }

  const handleFileSelect = async (file: File): Promise<void> => {
    const formData = new FormData()
    formData.append('file', file)

    const { data } = await axios.post(
      'http://localhost:8080/api/v1/files',
      formData
    )

    // update component
  }

  return (
    <div>
      <ul className={styles['mediaBay__files']}>
        {user?.files.map((file) => (
          <li
            key={file.id}
            className={clsx(styles['mediaBay__file'], {
              [styles['mediaBay__file--selected']]: selected.find(
                (f) => f.id === file.id
              ),
            })}>
            <img
              src={`http://localhost:8080${file.path}`}
              onClick={() => selectFile(file)}
            />
          </li>
        ))}
        <li className={styles['mediaBay__file']}>
          {/* <img src="https://via.placeholder.com/320x213.png?text=Upload" /> */}

          <ImageInput onFileSelect={handleFileSelect} />
        </li>
      </ul>
    </div>
  )
}
