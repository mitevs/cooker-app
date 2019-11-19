import styled from 'styled-components';
import Icon from '@shared/components/atoms/Icon';
import { colors } from '@shared/style';

const StyledIcon = styled(Icon)`
    display: block;
    max-width: 32px;
    margin: 0 auto;

    svg {
        fill: ${colors.grayDark1}
    }

    &:hover svg {
        fill: initial;
    }
`

export default StyledIcon;
