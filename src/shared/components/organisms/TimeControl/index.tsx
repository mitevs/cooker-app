import React from 'react';
import InputGroup from '@shared/components/molecules/InputGroup';
import { IconType } from '@shared/components/atoms/Icon';
import { TimeControl, TimeGroup, Icon } from './styles';
import { parseNumber } from '@shared/utils/parsers';
import useClock from './hooks/useClock';

export interface TimePickerProps {
    h?: number,
    m?: number
}

const TimePicker: React.FC<TimePickerProps> = ({
    h = 0,
    m = 0
}) => {
    const { hours, minutes, setHours, setMinutes } = useClock(h, m);

    return <TimeControl>
        <TimeGroup>
            <Icon type={IconType.arrowUp} modifiers={['big', 'point']} onClick={() => setHours(hours + 1)} />
            <InputGroup label="H" value={hours} onChange={({ target: { value } }) => setHours(parseNumber(value, h))} />
            <Icon type={IconType.arrowDown} modifiers={['big', 'point']} onClick={() => setHours(hours - 1)} />
        </TimeGroup>

        <TimeGroup>
            <Icon type={IconType.arrowUp} modifiers={['big', 'point']} onClick={() => setMinutes(minutes + 1)} />
            <InputGroup label="M" value={minutes} onChange={({ target: { value } }) => setMinutes(parseNumber(value, minutes))} />
            <Icon type={IconType.arrowDown} modifiers={['big', 'point']} onClick={() => setMinutes(minutes - 1)} />
        </TimeGroup>
    </TimeControl>;
};

export default TimePicker;
