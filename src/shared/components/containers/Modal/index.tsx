import React, { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

import { Heading } from '@shared/components/atoms/Heading'
import { Button } from '@shared/components/atoms/Button'

export interface ModalProps {
  heading?: string
  isOpen?: boolean
  onClose?: Function
  onSave?: Function
}

export const Modal: FC<ModalProps> = ({
  heading = 'Modal',
  isOpen = false,
  onClose,
  onSave,
  children,
}) => {
  useStyles(styles)

  return (
    <div className={clsx(styles.modal, { [styles['modal--open']]: isOpen })}>
      <div className={styles.modal__inner}>
        <div className={styles.modal__headline}>
          <Heading level="h3" className={styles.modal__heading}>
            {heading}
          </Heading>
        </div>
        <div className={styles.modal__body}>{children}</div>
        <div className={styles.modal__footer}>
          <Button onClick={() => onClose && onClose()}>Close</Button>
          <Button onClick={() => onSave && onSave()} buttonStyle="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
