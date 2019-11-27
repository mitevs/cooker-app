import styled, { css } from 'styled-components'
import { colors, sizes } from '@shared/style'
import { Label } from '@shared/components/atoms/Label'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifiers = {
  right: () => css`
    border: 1px solid ${colors.grayDark1};
    border-left: 0;
    border-radius: 0;
    border-top-right-radius: ${sizes.borderRadius};
    border-bottom-right-radius: ${sizes.borderRadius};
  `,
}

const StyledLabel = styled(Label)<{ modifiers?: string }>`
  background: ${colors.gray};
  text-align: center;
  border: 1px solid ${colors.grayDark1};
  border-right: 0;
  border-top-left-radius: ${sizes.borderRadius};
  border-bottom-left-radius: ${sizes.borderRadius};
  padding: ${sizes.basePadding} calc(${sizes.basePadding} * 2);
  margin: 0;

  ${applyStyleModifiers(modifiers)}
`

export { StyledLabel }
