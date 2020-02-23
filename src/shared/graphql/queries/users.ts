import { gql } from 'apollo-boost'

export const ME = gql`
  {
    me {
      id
      createdOn
      modifiedOn
      email
      username
      shortBio
      files {
        id
        createdOn
        modifiedOn
        name
        type
        path
      }
    }
  }
`
