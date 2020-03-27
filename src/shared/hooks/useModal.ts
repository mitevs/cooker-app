import { useRef, useEffect, ReactNode } from 'react'

export const useModal = (id = 'modal-root'): ReactNode => {
  const rootElemRef = useRef(document.createElement('div'))
  const parentElement = document.querySelector(`#${id}`)

  useEffect(() => {
    parentElement?.appendChild(rootElemRef.current)

    return () => {
      parentElement?.removeChild(rootElemRef.current)
    }
  }, [])

  return rootElemRef.current
}
