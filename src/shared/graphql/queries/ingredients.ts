import { gql } from "apollo-boost";

export const ingredients = () => {
    return gql`
      {
         ingredients {
            id
            createdOn
            modifiedOn
            name
            baseUnit
         }
      }
    `;
};
