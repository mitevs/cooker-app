import styled, { css } from 'styled-components'
import { colors, sizes } from '@shared/style'
import { darken, linearGradient, lighten } from 'polished'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifiers = {
  primary: () => css`
    border: 1px solid ${darken(0.1, colors.buttons.primary)};
    ${linearGradient({
      colorStops: [
        `${colors.buttons.primary} 0%`,
        `${darken(0.05, colors.buttons.primary)} 100%`,
      ],
      fallback: colors.buttons.primary,
      toDirection: 'to bottom',
    })}

    &:hover {
      border: 1px solid ${darken(0.05, colors.buttons.primary)};
      ${linearGradient({
        colorStops: [
          `${lighten(0.05, colors.buttons.primary)} 0%`,
          `${darken(0.05, colors.buttons.primary)} 100%`,
        ],
        fallback: lighten(0.05, colors.buttons.primary),
        toDirection: 'to bottom',
      })}
    }

    &:disabled {
      border: 1px solid ${darken(0.1, colors.buttons.primaryDisabled)};
      background: ${colors.buttons.primaryDisabled};
    }
  `,
}

const StyledButton = styled.button<{ modifiers?: string }>`
  border-radius: ${sizes.borderRadius};
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  color: ${colors.white};
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  font-weight: bold;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${applyStyleModifiers(modifiers)}
`

export { StyledButton }
