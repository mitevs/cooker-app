import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import SingleColumn from '@shared/components/templates/SingleColumn'
import Link from '@shared/components/atoms/Link'
import { GET_RECIPES } from '@shared/graphql/queries/recipes'
import AppContext from '@shared/AppContext'

const renderRecipes = (recipes: Recipe[]) => {
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            {recipe.title}
            <Link to={`/recipe/${recipe.id}`}>preview</Link>
          </div>
        )
      })}
    </div>
  )
}

const Recipes = () => {
  const { user } = useContext(AppContext)
  const { loading, data, error } = useQuery(GET_RECIPES, {
    variables: { authorId: user && user.id },
  })

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <SingleColumn>
      <h1>Hello Recipes</h1>
      {renderRecipes(data.recipes)}
      <Link to="/new-recipe">new recipe</Link>
    </SingleColumn>
  )
}

export default Recipes
