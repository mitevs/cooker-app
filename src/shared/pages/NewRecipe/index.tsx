import React, {
  useState,
  useContext,
  FormEvent,
  ChangeEvent,
  useCallback,
} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Context } from '@shared/AppContext'
import { Default } from '@shared/templates/Default'
import { INGREDIENTS } from '@shared/graphql/queries/ingredients'
import { CREATE_RECIPE } from '@shared/graphql/mutations/recipes'
import {
  TwoColumn,
  LeftColumn,
  RightColumn,
} from '@shared/components/containers/TwoColumn'
import { Heading } from '@shared/components/atoms/Heading'
import { TimeControl } from '@shared/components/organisms/TimeControl'
import { FormControl } from '@shared/components/molecules/FormControl'
import { Button } from '@shared/components/atoms/Button'
import { InputGroup } from '@shared/components/molecules/InputGroup'
import { Input } from '@shared/components/atoms/Input'
import { ImageInput } from '@shared/components/molecules/ImageInput'
import { Modal } from '@shared/components/containers/Modal'

import Loadable from 'react-loadable'
import Loading from '@shared/components/containers/Loading'
import { MediaBayProps } from '@shared/components/organisms/MediaBay'

interface RecipeIngredientIn {
  ingredientId: number
  quantity: number
}

interface StepIn {
  text: string
  group?: string
}

interface AssetIn {
  name: string
  url: string
  type: string
  meta?: string
}

interface RecipeIn {
  title: string
  excerpt: string
  servings: number
  prepTime: number
  authorId: string
  ingredients: RecipeIngredientIn[]
  steps: StepIn[]
  assets: AssetIn[]
}

const renderIngredients = (ingredients: Ingredient[]): React.ReactElement => (
  <div>
    {ingredients.map((ingredient, index) => {
      return <div key={index}>{ingredient.name}</div>
    })}
  </div>
)

const placeholderURL =
  'https://via.placeholder.com/480x320.png?text=Click+To+Upload+Image'

// load dynamically
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

const NewRecipe: React.FC = () => {
  const { user } = useContext(Context)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [image, setImage] = useState<Blob>()

  const [newRecipe, setNewRecipe] = useState<RecipeIn>({
    title: '',
    excerpt: '',
    servings: 0,
    prepTime: 0,
    authorId: user.id,
    ingredients: [{ ingredientId: 0, quantity: 0 }],
    steps: [{ text: '' }],
    assets: [],
  })

  // REmove asset mutation, only create recipe mutation needed
  const [createRecipe] = useMutation(CREATE_RECIPE)
  const [openMediaBay, setOpenMediaBay] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<MediaFile[]>([])
  const [mainImage, setMainImage] = useState<MediaFile | null>(null)

  const onSubmit = useCallback(async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      const { data: recipeResponse } = await createRecipe({
        variables: { ...newRecipe, ingredients: [], steps: [] },
      })

      setShouldRedirect(true)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const renderIngredientsSection = (): React.ReactElement => {
    return <Heading level="h2">Ingredients</Heading>
  }

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = e.target
      // validateField(name, value);
      setNewRecipe((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  if (shouldRedirect) {
    return <Redirect to="/recipes" />
  }

  const { loading, data } = useQuery<{ ingredients: Ingredient[] }>(INGREDIENTS)

  if (loading) {
    return <div>loading...</div>
  }

  const onStepChange = useCallback((index, text): void => {
    const steps = newRecipe.steps
    steps[index].text = text
    setNewRecipe({ ...newRecipe, steps })
  }, [])

  const addStep = useCallback((): void => {
    setNewRecipe({ ...newRecipe, steps: [...newRecipe.steps, { text: '' }] })
  }, [])

  const addIngredient = useCallback((): void => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, { ingredientId: 0, quantity: 0 }],
    })
  }, [])

  const stepForm = (): React.ReactElement => {
    return (
      <div>
        <button onClick={addStep}>add step</button>

        {newRecipe.steps.map((step, index) => (
          <textarea
            key={index}
            value={step.text}
            onChange={({ target: { value } }) =>
              onStepChange(index, value)
            }></textarea>
        ))}
      </div>
    )
  }

  const onIngredientChange = useCallback((index, value, fieldName) => {
    const ingredients = newRecipe.ingredients
    ingredients[index][fieldName] = value
    setNewRecipe({ ...newRecipe, ingredients })
  }, [])

  const renderIngredientItem = (ingredient: Ingredient): React.ReactElement => {
    return <div key={ingredient.id}></div>
  }

  const ingredientForm = (): React.ReactElement | null => {
    if (data) {
      return (
        <div>
          <button onClick={addIngredient}>add ingredient</button>

          {newRecipe.ingredients.map((ingredient, index) => (
            <div key={index}>
              <select
                value={ingredient.ingredientId}
                onChange={({ target: { value } }) =>
                  onIngredientChange(index, value, 'ingredientId')
                }>
                <option value="0">Select...</option>
                {data.ingredients.map((ing, index2) => (
                  <option key={index2} value={ing.id}>
                    {ing.name}
                  </option>
                ))}
              </select>
              <input
                placeholder="Quantity"
                onChange={({ target: { value } }) =>
                  onIngredientChange(index, value, 'quantity')
                }
              />
            </div>
          ))}
        </div>
      )
    }

    return null
  }

  const handleFileSelect = (file: File): void => {
    setImage(file)
  }

  const onClose = useCallback(() => setOpenMediaBay(false), [])

  const onSave = useCallback(() => {
    if (selectedFiles.length) {
      setMainImage(selectedFiles[0])
    }

    setOpenMediaBay(false)
  }, [selectedFiles])

  const onSelect = useCallback((files) => {
    if (files.length) {
      setSelectedFiles([...files])
    }
  }, [])

  return (
    <Default>
      <Heading>New Recipe</Heading>

      <Modal
        heading="Media Bay"
        isOpen={openMediaBay}
        onClose={onClose}
        onSave={onSave}>
        <MediaBay isSingleSelect={true} onSelect={onSelect} />
      </Modal>

      <form onSubmit={onSubmit}>
        <TwoColumn>
          <LeftColumn>
            <img
              width="480"
              height="320"
              src={
                mainImage
                  ? `http://localhost:8080${mainImage.path}`
                  : placeholderURL
              }
              onClick={() => setOpenMediaBay(true)}
            />
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
        <TwoColumn>
          <LeftColumn>
            <Heading level="h2">Preparation Steps</Heading>
            {stepForm()}
          </LeftColumn>
          <RightColumn>{renderIngredientsSection()}</RightColumn>
        </TwoColumn>

        <Button type="submit" buttonStyle="primary">
          Create
        </Button>
      </form>
    </Default>
  )
}

export default NewRecipe
