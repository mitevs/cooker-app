import { gql } from 'apollo-boost'

export const CREATE_ASSET = gql`
  mutation CreateAsset(
    $name: String!
    $url: String!
    $type: String!
    $meta: String
    $recipeId: ID!
  ) {
    createAsset(
      name: $name
      url: $url
      type: $type
      meta: $meta
      recipeId: $recipeId
    ) {
      id
      createdOn
      modifiedOn
    }
  }
`
