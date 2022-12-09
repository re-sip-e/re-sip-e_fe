import { useMutation, gql } from "@apollo/client";
const SEND_DRINK_UPDATE = gql`
  mutation ($input: DrinkUpdateInput!) {
    drinkUpdate(input: $input) {
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

export const useEditedCocktail = (id, editedDrink) => {
  console.log(id, editedDrink);
  const input = {
    id: id,
    drinkInput: editedDrink,
  };
  const [drinkUpdate, { loading, error, data }] = useMutation(SEND_DRINK_UPDATE, {
    variables: {
      input,
    },
  });
  console.log(data);
};
