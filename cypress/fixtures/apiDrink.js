import { gql } from "@apollo/client";
export const SEND_ADDED_DRINK = gql`
  mutation ($input: DrinkCreateInput!) {
    drinkCreate(input: $input) {
      drink {
        id
        name
        steps
        imgUrl
        ingredients {
          id
          description
        }
      }
    }
  }
`;
