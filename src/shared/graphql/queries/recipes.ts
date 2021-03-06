import { gql } from 'apollo-boost'

export const GET_RECIPES = gql`
  query GetRecipes($authorId: ID!) {
    recipes(authorId: $authorId) {
      id
      createdOn
      modifiedOn
      title
      excerpt
    }
  }
`

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(id: $id) {
      id
      createdOn
      modifiedOn
      title
      excerpt
      servings
      prepTime
      steps {
        text
        group
      }
      assets {
        name
        type
        url
      }
      ingredients {
        name
        baseUnit
        quantity
      }
      author {
        email
        username
        shortBio
      }
    }
  }
`
