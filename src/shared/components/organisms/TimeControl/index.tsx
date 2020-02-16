import React, { FC } from 'react'
import { Icon, IconType } from '@shared/components/atoms/Icon'
import { InputGroup } from '@shared/components/molecules/InputGroup'
import { parseNumber } from '@shared/utils/parsers'
import { useClock } from './hooks/useClock'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles.scss'

export interface TimePickerProps {
  h?: number
  m?: number
}

export const TimeControl: FC<TimePickerProps> = ({ h = 0, m = 0 }) => {
  useStyles(styles)

  const { hours, minutes, setHours, setMinutes } = useClock(h, m)

  return (
    <div className={styles.timeControl}>
      <div className={styles.timeGroup}>
        <Icon
          className={styles.icon}
          type={IconType.arrowUp}
          size="big"
          pointer={true}
          onClick={() => setHours(hours + 1)}
        />
        {/* <InputGroup
          label="H"
          value={hours}
          onChange={({ target: { value } }) => setHours(parseNumber(value, h))}
        /> */}
        <Icon
          className={styles.icon}
          type={IconType.arrowDown}
          size="big"
          pointer={true}
          onClick={() => setHours(hours - 1)}
        />
      </div>

      <div className={styles.timeGroup}>
        <Icon
          className={styles.icon}
          type={IconType.arrowUp}
          size="big"
          pointer={true}
          onClick={() => setMinutes(minutes + 1)}
        />
        {/* <InputGroup
          label="M"
          value={minutes}
          onChange={({ target: { value } }) =>
            setMinutes(parseNumber(value, minutes))
          }
        /> */}
        <Icon
          className={styles.icon}
          type={IconType.arrowDown}
          size="big"
          pointer={true}
          onClick={() => setMinutes(minutes - 1)}
        />
      </div>
    </div>
  )
}
