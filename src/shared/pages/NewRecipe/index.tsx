import React, {
  FC,
  useContext,
  useState,
  useCallback,
  ChangeEvent,
} from 'react'
import Loadable from 'react-loadable'
import { Context } from '@shared/AppContext'
import { Default } from '@shared/templates/Default'

import {
  TwoColumn,
  LeftColumn,
  RightColumn,
} from '@shared/components/containers/TwoColumn'

import { Modal } from '@shared/components/containers/Modal'
import { FormControl } from '@shared/components/molecules/FormControl'
import { MediaBayProps } from '@shared/components/organisms/MediaBay'
import Loading from '@shared/components/containers/Loading'

const placeholderURL =
  'https://via.placeholder.com/480x320.png?text=Click+To+Upload+Image'

interface RecipeData {
  title: string
  excerpt: string
  servings: number
  prepTime: number
  authorId?: string
}

// number of assets for each step (total steps: 6)
const getNewAssets = (): Asset[] => {
  const assets: Asset[] = []

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

const getNewSteps = (): Step[] => {
  const steps: Step[] = []

  for (let i = 0; i < 6; i++) {
    steps.push({
      text: '',
    })
  }

  return steps
}

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
  const { user } = useContext(Context)

  const [openMediaBay, setOpenMediaBay] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedFile, setSelectedFle] = useState<MediaFile | null>(null)

  const [newRecipe, setNewRecipe] = useState<RecipeData>({
    title: '',
    excerpt: '',
    servings: 0,
    prepTime: 0,
    authorId: user?.id,
  })

  const [steps, setSteps] = useState<Step[]>(getNewSteps())
  const [assets, setAssets] = useState<Asset[]>(getNewAssets())
  const [ingredients, setIngredients] = useState<Asset[]>(getNewAssets())

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target
      // validateField(name, value);
      setNewRecipe((prev) => ({ ...prev, [name]: value }))
    },
    []
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
      const asset = assets[currentStep]

      const newAsset = {
        ...asset,
        name: selectedFile.name,
        url: selectedFile.path,
        type: selectedFile.type,
      }

      const newAssets = [...assets]
      newAssets.splice(currentStep, 1, newAsset)
      setAssets(newAssets)
      setOpenMediaBay(false)
    }
  }

  const onSelect = (files: MediaFile[]): void => {
    if (files.length) {
      setSelectedFle(files[0])
    }
  }

  const getAssetPath = (asset: Asset): string => {
    if (asset.url) {
      return `http://localhost:8080${asset.url}`
    }

    return placeholderURL
  }

  return (
    <Default>
      <Modal
        heading="Media Bay"
        isOpen={openMediaBay}
        onClose={onClose}
        onSave={onSave}>
        <MediaBay isSingleSelect={true} onSelect={onSelect} />
      </Modal>

      <form action="">
        <TwoColumn>
          <LeftColumn>
            <ul>
              {steps.map((step, i) => (
                <li key={i}>
                  <img
                    width="480"
                    height="320"
                    src={getAssetPath(assets[i])}
                    onClick={() => openModal(i)}
                  />
                </li>
              ))}
            </ul>
          </LeftColumn>
          <RightColumn>
            <FormControl
              label="Title"
              name="title"
              value={newRecipe.title}
              onChange={onChange}
            />

            <FormControl
              label="Excerpt"
              name="excerpt"
              value={newRecipe.excerpt}
              onChange={onChange}
            />

            <FormControl
              label="Servings"
              name="servings"
              type="number"
              value={newRecipe.servings}
              onChange={onChange}
            />

            <FormControl
              label="Preparation Time"
              name="prepTime"
              type="number"
              value={newRecipe.prepTime}
              onChange={onChange}
            />
          </RightColumn>
        </TwoColumn>
      </form>
    </Default>
  )
}

export default NewRecipe
