import { http } from '@client/http/client'
import React, {
  FC,
  useContext,
  useState,
  createRef,
  useEffect,
  useCallback,
} from 'react'
import clsx from 'clsx'
import { Context } from '@shared/AppContext'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface MediaBayProps {
  isSingleSelect?: boolean
  onSelect?: (file: MediaFile[]) => void
}

export const MediaBay: FC<MediaBayProps> = ({
  isSingleSelect = false,
  onSelect,
}) => {
  useStyles(styles)

  const reader = new FileReader()
  const inputRef = createRef<HTMLInputElement>()
  const { user } = useContext(Context)

  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>(user?.files ?? [])
  const [selectedMediaFiles, setSelectedMediaFiles] = useState<MediaFile[]>([])

  // selected files to upload
  const [uploadFiles, setUploadFiles] = useState<File[]>([])

  // preview for the selected files to upload
  const [uploadFilesPreview, setUploadFilesPreview] = useState<string[]>([])

  const selectFile = useCallback((file: MediaFile): void => {
    const foundFile = selectedMediaFiles.find(({ id }) => id === file.id)

    let files: MediaFile[] = []

    if (isSingleSelect) {
      if (!foundFile) {
        files.push(file)
      }
    } else {
      files = [...selectedMediaFiles]

      if (foundFile) {
        files.splice(files.indexOf(foundFile), 1)
      } else {
        files.push(file)
      }
    }

    if (onSelect) {
      onSelect(files)
    }

    setSelectedMediaFiles(files)
  }, [])

  const doUpload = async (files) => {
    const formData = new FormData()

    files.forEach((file) => {
      formData.append('file', file)
    })

    const { data } = await http.post('files', formData, {
      onUploadProgress: (event) => {
        console.log(event.loaded)
        console.log(event.total)
      },
    })

    // cleanup
    setUploadFiles([])
    setUploadFilesPreview([])

    // set newly uploaded files
    setMediaFiles([...mediaFiles, ...data])
  }

  useEffect(() => {
    if (uploadFiles.length) {
      doUpload(uploadFiles)
    }
  }, [uploadFiles])

  // Gets preview of the files and triggers the upload
  const handleFilesChange = (files: FileList | null): void => {
    if (files) {
      let index = 0
      const filesArr = Array.from(files)
      const readImages: any[] = []

      reader.onload = () => {
        readImages.push(reader.result)

        if (index < files.length) {
          reader.readAsDataURL(files[index++])
        } else {
          setUploadFilesPreview(readImages)
          setUploadFiles(filesArr)
        }
      }

      reader.readAsDataURL(files[index++])
    }
  }

  const onFilesChange = useCallback(
    ({ target: { files } }) => handleFilesChange(files),
    []
  )

  return (
    <div>
      <ul className={styles['mediaBay__files']}>
        {mediaFiles.map((file) => (
          <li
            key={file.id}
            className={clsx(styles['mediaBay__file'], {
              [styles['mediaBay__file--selected']]: selectedMediaFiles.includes(
                file
              ),
            })}>
            <img
              src={`http://localhost:8080${file.path}`}
              onClick={() => selectFile(file)}
            />
          </li>
        ))}
        {uploadFilesPreview.map((src, i) => (
          <li key={i} className={styles['mediaBay__file']}>
            <img src={src} />
          </li>
        ))}
        <li className={styles['mediaBay__file']}>
          <input
            ref={inputRef}
            type="file"
            onChange={onFilesChange}
            accept="image/*"
            multiple
          />
        </li>
      </ul>
    </div>
  )
}
