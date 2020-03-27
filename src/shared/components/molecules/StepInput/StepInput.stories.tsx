import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, text } from '@storybook/addon-knobs'
import { StepInput } from '.'

const stories = storiesOf('Molecules|StepInput', module)

stories.add('Default', () => {
  return (
    <div style={{ width: '360px', margin: '0 auto' }}>
      <StepInput
        order={number('Order', 1)}
        img={text('Img', 'https://via.placeholder.com/360x180')}
        onImageClick={action('image click')}
        onTitle={action('title change')}
        onText={action('text change')}
      />
    </div>
  )
})
