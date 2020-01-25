import { gql } from 'apollo-boost'

export const CREATE_RECIPE = gql`
  mutation createRecipe(
    $title: String!
    $excerpt: String!
    $servings: Int!
    $prepTime: Int!
    $authorId: ID!
    $ingredients: [RecipeIngredientInput!]!
    $steps: [StepInput!]!
  ) {
    createRecipe(
      recipe: {
        title: $title
        excerpt: $excerpt
        servings: $servings
        prepTime: $prepTime
        authorId: $authorId
        ingredients: $ingredients
        steps: $steps
      }
    ) {
      id
      createdOn
      modifiedOn
    }
  }
`
