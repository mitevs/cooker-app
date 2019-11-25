import { gql } from 'apollo-boost'

export const CREATE_RECIPE = gql`
  mutation CreateRecipe(
    $title: String!
    $excerpt: String!
    $servings: Int!
    $prepTime: Int!
    $nutritionFacts: String!
    $prepSteps: String!
    $authorId: ID!
  ) {
    createRecipe(
      recipe: {
        title: $title
        excerpt: $excerpt
        servings: $servings
        prepTime: $prepTime
        nutritionFacts: $nutritionFacts
        prepSteps: $prepSteps
        authorId: $authorId
        ingredients: []
      }
    ) {
      id
      createdOn
      modifiedOn
    }
  }
`
