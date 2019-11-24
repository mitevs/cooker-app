import { gql } from 'apollo-boost'

export const CREATE_USER = gql`
  mutation CreateUser(
    $email: String!
    $username: String!
    $password: String!
  ) {
    createUser(
      user: {
        email: $email
        username: $username
        password: $password
      }
    ) {
      id
      createdOn
      modifiedOn
    }
  }
`
