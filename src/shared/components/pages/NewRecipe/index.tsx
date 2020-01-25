import React, {
  Fragment,
  useState,
  useContext,
  FormEvent,
  ChangeEvent,
} from 'react'
import { Redirect } from 'react-router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Context } from '@shared/AppContext'
import { INGREDIENTS } from '@shared/graphql/queries/ingredients'
import { GET_RECIPES } from '@shared/graphql/queries/recipes'
import { CREATE_RECIPE } from '@shared/graphql/mutations/recipes'
import { Default } from '@shared/components/templates/Default'
import { TwoColumn } from '@shared/components/containers/TwoColumn'
import { Headline } from '@shared/components/atoms/Headline'
import { TimeControl } from '@shared/components/organisms/TimeControl'
import { FormControl } from '@shared/components/molecules/FormControl'
import { Button } from '@shared/components/atoms/Button'
import { InputGroup } from '@shared/components/molecules/InputGroup'
import { Input } from '@shared/components/atoms/Input'

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

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    console.log(newRecipe)

    // if (user) {
    //   try {
    //     await createRecipe({
    //       variables: { ...newRecipe },
    //       // update apollo cache after mutation
    //       update: (store, { data: { createRecipe } }) => {
    //         const data = store.readQuery<{
    //           recipes: Recipe[]
    //         }>({
    //           query: GET_RECIPES,
    //           variables: { authorId: user.id },
    //         })

    //         if (data) {
    //           data.recipes = [
    //             ...data.recipes,
    //             { ...newRecipe, ...createRecipe },
    //           ]
    //         }

    //         store.writeQuery({
    //           query: GET_RECIPES,
    //           data,
    //           variables: { authorId: user.id },
    //         })
    //       },
    //     })

    //     setShouldRedirect(true)
    //   } catch (err) {
    //     console.log('err ', err)
    //   }
    // }
  }

  const renderIngredientsSection = (): React.ReactElement => {
    return (
      <Fragment>
        <Headline level="h2">Ingredients</Headline>
      </Fragment>
    )
  }

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    // validateField(name, value);
    setNewRecipe((prev) => ({ ...prev, [name]: value }))
  }

  const { loading, data } = useQuery<{ ingredients: Ingredient[] }>(INGREDIENTS)

  if (loading) {
    return <div>loading...</div>
  }

  if (shouldRedirect) {
    return <Redirect to="/recipes" />
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

  return (
    <Default>
      <Headline>New Recipe</Headline>
      <form onSubmit={onSubmit}>
        <TwoColumn>
          <TwoColumn.Left>
            <img src="https://placeimg.com/480/320/animals" />
          </TwoColumn.Left>
          <TwoColumn.Right>
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
          </TwoColumn.Right>
        </TwoColumn>
        <TwoColumn>
          <TwoColumn.Left>
            <Headline level="h2">Preparation Steps</Headline>
            {stepForm()}
          </TwoColumn.Left>
          <TwoColumn.Right>{renderIngredientsSection()}</TwoColumn.Right>
        </TwoColumn>
      </form>
    </Default>
  )
}

export default NewRecipe
