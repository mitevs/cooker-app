import React, { useState, useContext, FormEvent, ChangeEvent } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Context } from '@shared/AppContext'
import { Default } from '@shared/templates/Default'
import { INGREDIENTS } from '@shared/graphql/queries/ingredients'
import { GET_RECIPES } from '@shared/graphql/queries/recipes'
import { CREATE_RECIPE } from '@shared/graphql/mutations/recipes'
import { CREATE_ASSET } from '@shared/graphql/mutations/assets'
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

interface RecipeIngredientIn {
  ingredientId: number
  quantity: number
}

interface StepIn {
  text: string
  group?: string
}

interface RecipeIn {
  title: string
  excerpt: string
  servings: number
  prepTime: number
  authorId: string
  ingredients: RecipeIngredientIn[]
  steps: StepIn[]
}

const renderIngredients = (ingredients: Ingredient[]): React.ReactElement => (
  <div>
    {ingredients.map((ingredient, index) => {
      return <div key={index}>{ingredient.name}</div>
    })}
  </div>
)

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
  })

  const [createRecipe] = useMutation(CREATE_RECIPE)
  const [createAsset] = useMutation(CREATE_ASSET)

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      const { data: recipeResponse } = await createRecipe({
        variables: { ...newRecipe, ingredients: [], steps: [] },
      })

      // upload image: Create Gallery component
      if (image) {
        const data = new FormData()
        data.append('file', image)

        const { data: fileResponse } = await axios.post(
          'http://localhost:8080/api/v1/files',
          data
        )

        // create asset
        const { data: assetResponse } = await createAsset({
          variables: {
            name: fileResponse.name,
            url: fileResponse.path,
            type: fileResponse.type,
            meta: 'main',
            recipeId: recipeResponse.createRecipe.id,
          },
        })
      }

      setShouldRedirect(true)
    } catch (err) {
      console.log(err)
    }
  }

  const renderIngredientsSection = (): React.ReactElement => {
    return <Heading level="h2">Ingredients</Heading>
  }

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    // validateField(name, value);
    setNewRecipe((prev) => ({ ...prev, [name]: value }))
  }

  if (shouldRedirect) {
    return <Redirect to="/recipes" />
  }

  const { loading, data } = useQuery<{ ingredients: Ingredient[] }>(INGREDIENTS)

  if (loading) {
    return <div>loading...</div>
  }

  const onStepChange = (index, text): void => {
    const steps = newRecipe.steps
    steps[index].text = text
    setNewRecipe({ ...newRecipe, steps })
  }

  const addStep = (): void => {
    setNewRecipe({ ...newRecipe, steps: [...newRecipe.steps, { text: '' }] })
  }

  const addIngredient = (): void => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, { ingredientId: 0, quantity: 0 }],
    })
  }

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

  const onIngredientChange = (index, value, fieldName) => {
    const ingredients = newRecipe.ingredients
    ingredients[index][fieldName] = value
    setNewRecipe({ ...newRecipe, ingredients })
  }

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

  return (
    <Default>
      <Heading>New Recipe</Heading>
      <form onSubmit={onSubmit}>
        <TwoColumn>
          <LeftColumn>
            <ImageInput onFileSelect={handleFileSelect} />
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
