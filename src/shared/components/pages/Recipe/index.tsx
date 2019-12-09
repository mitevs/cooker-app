import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { Default } from '@shared/components/templates/Default'
import { GET_RECIPE } from '@shared/graphql/queries/recipes'

interface RecipeData {
  recipe: Recipe
}

interface RecipeVars {
  id: string
}

const Recipe: React.FC = () => {
  const { id } = useParams()

  if (id) {
    const { loading, data } = useQuery<RecipeData, RecipeVars>(GET_RECIPE, {
      variables: { id },
    })

    if (loading) {
      return <div>loading...</div>
    } else if (data) {
      return (
        <Default>
          <h1>{data.recipe.title}</h1>
          <p>{data.recipe.excerpt}</p>
        </Default>
      )
    } else {
      return <div>No data...</div>
    }
  } else {
    // render error page
    return <div>Id not provided...</div>
  }
}

export default Recipe
