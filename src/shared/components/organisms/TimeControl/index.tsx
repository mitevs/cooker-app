import React from 'react'
import { InputGroup } from '@shared/components/molecules/InputGroup'
import { IconType } from '@shared/components/atoms/Icon'
import { StyledTimeControl } from './styles/TimeControl'
import { StyledTimeGroup } from './styles/TimeGroup'
import { StyledIcon } from './styles/Icon'
import { parseNumber } from '@shared/utils/parsers'
import { useClock } from './hooks/useClock'

export interface TimePickerProps {
  h?: number
  m?: number
}

const TimeControl: React.FC<TimePickerProps> = ({ h = 0, m = 0 }) => {
  const { hours, minutes, setHours, setMinutes } = useClock(h, m)

  return (
    <StyledTimeControl>
      <StyledTimeGroup>
        <StyledIcon
          type={IconType.arrowUp}
          modifiers={['big', 'point']}
          onClick={() => setHours(hours + 1)}
        />
        <InputGroup
          label="H"
          value={hours}
          onChange={({ target: { value } }) => setHours(parseNumber(value, h))}
        />
        <StyledIcon
          type={IconType.arrowDown}
          modifiers={['big', 'point']}
          onClick={() => setHours(hours - 1)}
        />
      </StyledTimeGroup>

      <StyledTimeGroup>
        <StyledIcon
          type={IconType.arrowUp}
          modifiers={['big', 'point']}
          onClick={() => setMinutes(minutes + 1)}
        />
        <InputGroup
          label="M"
          value={minutes}
          onChange={({ target: { value } }) =>
            setMinutes(parseNumber(value, minutes))
          }
        />
        <StyledIcon
          type={IconType.arrowDown}
          modifiers={['big', 'point']}
          onClick={() => setMinutes(minutes - 1)}
        />
      </StyledTimeGroup>
    </StyledTimeControl>
  )
}

export { TimeControl }
