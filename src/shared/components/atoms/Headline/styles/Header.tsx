import styled from 'styled-components';
import { fontSize } from '@shared/style';

const H1 = styled.h1`
    font-size: ${fontSize.xxl}
`

const H2 = styled.h2`
    font-size: ${fontSize.xl}
`

const H3 = styled.h3`
    font-size: ${fontSize.lg}
`

const H4 = styled.h4`
    font-size: ${fontSize.md}
`

const H5 = styled.h5`
    font-size: ${fontSize.sm}
`

const H6 = styled.h6`
    font-size: ${fontSize.xs}
`

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
};
