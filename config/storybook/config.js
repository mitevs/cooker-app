import { configure, addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs'
import { stylesDecorator } from './decorators/style-decorator'

const req = require.context(
  '../../src/shared/components',
  true,
  /.stories.tsx$/
)

addDecorator(withKnobs)
addDecorator(stylesDecorator)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
