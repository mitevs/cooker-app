import styled from 'styled-components';
import Icon from './Icon';

const StyledDiv = styled.div`
    &:first-child {
        margin-right: 10px;
    }

    ${Icon} {
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover {
        ${Icon} {
            opacity: 1;
        }
    }
`

export default StyledDiv;
