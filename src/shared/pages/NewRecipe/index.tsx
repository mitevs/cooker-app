import React, { FC, useContext, useState } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import Loadable from 'react-loadable'
import { AppContext } from '@shared/AppContext'
import { Default } from '@shared/templates/Default'
import {
  TwoColumn,
  LeftColumn,
  RightColumn,
} from '@shared/components/containers/TwoColumn'

import { Button } from '@shared/components/atoms/Button'
import { Input } from '@shared/components/atoms/Input'
import { Text } from '@shared/components/atoms/Text'
import { Modal } from '@shared/components/containers/Modal'
import { StepInput } from '@shared/components/molecules/StepInput'
import { Loading } from '@shared/components/containers/Loading'
import { MediaBayProps } from '@shared/components/organisms/MediaBay'

import styles from './styles.scss'
import { useInput } from '@shared/hooks/useInput'
import { Grid, GridItem } from '@shared/components/containers/Grid'

// number of assets for each step (total steps: 6)
const getNewAssets = (): AssetInput[] => {
  const assets: AssetInput[] = []

  for (let i = 0; i < 6; i++) {
    assets.push({
      name: '',
      type: '',
      url: '',
      meta: `step_${i}`,
    })
  }

  return assets
}

const getNewSteps = (): StepInput[] => {
  const steps: StepInput[] = []

  for (let i = 0; i < 6; i++) {
    steps.push({
      title: '',
      text: '',
    })
  }

  return steps
}

const getNewRecipeInput = (user: User): RecipeInput => ({
  title: '',
  excerpt: '',
  servings: 0,
  prepTime: 0,
  steps: getNewSteps(),
  assets: getNewAssets(),
  ingredients: [],
  authorId: user.id,
})

const MediaBay = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "media-bay" */
      '@shared/components/organisms/MediaBay'
    ),
  loading: Loading,
  render(loaded, props: MediaBayProps) {
    const Component = loaded.MediaBay
    return <Component {...props} />
  },
})

const NewRecipe: FC = () => {
  useStyles(styles)

  const { user } = useContext(AppContext)

  const [title, setTitle] = useInput('')
  const [excerpt, setExcerpt] = useInput('')
  const [servings, setServings] = useInput()
  const [prepTime, setPrepTime] = useInput()

  const [openMediaBay, setOpenMediaBay] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedFile, setSelectedFle] = useState<MediaFile | null>(null)
  const [newRecipe, setNewRecipe] = useState<RecipeInput>(
    getNewRecipeInput(user)
  )

  const openModal = (step): void => {
    setCurrentStep(step)
    setOpenMediaBay(true)
  }

  const onClose = (): void => {
    setOpenMediaBay(false)
  }

  const onSave = (): void => {
    if (selectedFile) {
      const asset = newRecipe.assets[currentStep]

      const newAsset = {
        ...asset,
        name: selectedFile.name,
        url: selectedFile.path,
        type: selectedFile.type,
      }

      const newAssets = [...newRecipe.assets]
      newAssets.splice(currentStep, 1, newAsset)

      const updatedRecipe = { ...newRecipe, assets: newAssets }
      setNewRecipe(updatedRecipe)
      setOpenMediaBay(false)
    }
  }

  const onSelect = (files: MediaFile[]): void => {
    if (files.length) {
      setSelectedFle(files[0])
    }
  }

  const getAssetPath = (asset: AssetInput): string => {
    if (asset.url) {
      return `http://localhost:8080${asset.url}`
    }

    return ''
  }

  const onStepChange = (step: StepInput, index: number): void => {
    const stepToUpdate = newRecipe.steps[index]
    const newSteps = [...newRecipe.steps]
    newSteps.splice(index, 1, { ...stepToUpdate, ...step })
    const updatedRecipe = { ...newRecipe, steps: newSteps }
    setNewRecipe(updatedRecipe)
  }

  return (
    <Default className={styles.layout}>
      <TwoColumn layout="expand-left" className={styles.twoColumn}>
        <LeftColumn>
          <Grid rows={2} cols={3}>
            {newRecipe.steps.map((step, i) => (
              <GridItem key={i}>
                <StepInput
                  key={i}
                  order={i + 1}
                  img={getAssetPath(newRecipe.assets[i])}
                  onImageClick={() => openModal(i)}
                  onChange={(step) => onStepChange(step, i)}
                  className={styles.stepInput}
                />
              </GridItem>
            ))}
          </Grid>
        </LeftColumn>

        <RightColumn>
          <Input
            className={styles.recipeInput}
            name="title"
            value={title}
            onChange={setTitle}
            placeholder="Title..."
          />

          <Input
            className={styles.recipeInput}
            type="number"
            name="servings"
            value={servings}
            onChange={setServings}
            placeholder="Servings..."
          />

          <Input
            className={styles.recipeInput}
            type="number"
            name="prepTime"
            value={prepTime}
            onChange={setPrepTime}
            placeholder="Preparation time..."
          />

          <Text
            className={styles.recipeExcerpt}
            name="excerpt"
            value={excerpt}
            onChange={setExcerpt}
            placeholder="Excerpt..."
          />

          <Button
            buttonStyle="primary"
            onClick={() =>
              console.log({ ...newRecipe, title, excerpt, servings, prepTime })
            }>
            Create
          </Button>
        </RightColumn>
      </TwoColumn>

      <Modal
        heading="Media Bay"
        isOpen={openMediaBay}
        onClose={onClose}
        onSave={onSave}>
        <MediaBay isSingleSelect={true} onSelect={onSelect} />
      </Modal>
    </Default>
  )
}

export default NewRecipe
