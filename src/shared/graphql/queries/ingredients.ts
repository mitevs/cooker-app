import { gql } from 'apollo-boost';

export const INGREDIENTS = gql`
{
  ingredients {
    id
    createdOn
    modifiedOn
    name
    baseUnit
  }
}
`
