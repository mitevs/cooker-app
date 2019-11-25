import React, { useState, useContext, FormEvent, ChangeEvent } from 'react'
import { Redirect } from 'react-router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import SingleColumn from '@shared/components/templates/SingleColumn'
import FormControl from '@shared/components/molecules/FormControl'
import Button from '@shared/components/atoms/Button'
import AppContext from '@shared/AppContext'
import { INGREDIENTS } from '@shared/graphql/queries/ingredients'
import { GET_RECIPES } from '@shared/graphql/queries/recipes'
import { CREATE_RECIPE } from '@shared/graphql/mutations/recipes'

const renderIngredients = (ingredients: Ingredient[]): React.ReactElement => (
  <div>
    {ingredients.map((ingredient, index) => {
      return <div key={index}>{ingredient.name}</div>
    })}
  </div>
)

const NewRecipe: React.FC = () => {
  const { user } = useContext(AppContext)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [newRecipe, setNewRecipe] = useState({
    authorId: user && user.id,
    title: '',
    excerpt: '',
    servings: 0,
    prepTime: 0,
    nutritionFacts: '',
    ingredients: [],
    prepSteps: '',
  })

  const [createRecipe] = useMutation(CREATE_RECIPE)

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    if (user) {
      try {
        await createRecipe({
          variables: { ...newRecipe },
          // update apollo cache after mutation
          update: (store, { data: { createRecipe } }) => {
            const data = store.readQuery<{
              recipes: Recipe[]
            }>({
              query: GET_RECIPES,
              variables: { authorId: user.id },
            })

            if (data) {
              data.recipes = [...data.recipes, { ...newRecipe, ...createRecipe }]
            }

            store.writeQuery({
              query: GET_RECIPES,
              data,
              variables: { authorId: user.id },
            })
          },
        })

        setShouldRedirect(true)
      } catch (err) {
        console.log('err ', err)
      }
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    // validateField(name, value);
    setNewRecipe((prev) => ({ ...prev, [name]: value }))
  }

  const { loading, data } = useQuery(INGREDIENTS)

  if (loading) {
    return <div>loading...</div>
  }

  if (shouldRedirect) {
    return <Redirect to="/recipes" />
  }

  return (
    <SingleColumn>
      <h1>Hello New Recipe</h1>

      <form onSubmit={onSubmit} noValidate>
        <FormControl label="Title" name="title" onChange={onChange} value={newRecipe.title} />

        <FormControl label="Excerpt" name="excerpt" onChange={onChange} value={newRecipe.excerpt} />

        <select name="servings" onChange={onChange} value={newRecipe.servings}>
          <option value="0">Select...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <FormControl
          label="Preparation Time"
          name="prepTime"
          type="number"
          onChange={onChange}
          value={newRecipe.prepTime}
        />

        <FormControl
          label="Nutrition Facts"
          name="nutritionFacts"
          onChange={onChange}
          value={newRecipe.nutritionFacts}
        />

        <h4>Ingredients</h4>
        {renderIngredients(data.ingredients)}

        <h4>Preparation Steps</h4>
        <FormControl
          label="Preparation Steps"
          name="prepSteps"
          onChange={onChange}
          value={newRecipe.prepSteps}
        />
        <Button>Create</Button>
      </form>
    </SingleColumn>
  )
}

export default NewRecipe
