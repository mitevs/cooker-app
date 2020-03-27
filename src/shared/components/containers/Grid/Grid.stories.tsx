import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, GridItem } from '.'

const stories = storiesOf('Containers|Grid', module)

stories.add('Default', () => (
  <Grid rows={3} cols={3}>
    <GridItem>1</GridItem>
    <GridItem>2</GridItem>
    <GridItem>3</GridItem>
    <GridItem>4</GridItem>
    <GridItem>5</GridItem>
    <GridItem>6</GridItem>
  </Grid>
))
