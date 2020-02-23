import { gql } from 'apollo-boost'

export const CREATE_RECIPE = gql`
  mutation CreateRecipe(
    $title: String!
    $excerpt: String!
    $servings: Int!
    $prepTime: Int!
    $authorId: ID!
    $ingredients: [RecipeIngredientInput!]!
    $steps: [StepInput!]!
    $assets: [AssetInput!]
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
        assets: $assets
      }
    ) {
      id
      createdOn
      modifiedOn
    }
  }
`
