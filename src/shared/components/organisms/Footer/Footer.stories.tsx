import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '.'

const stories = storiesOf('Organisms|Footer', module)

stories.add('Default', () => {
  return <Footer></Footer>
})
