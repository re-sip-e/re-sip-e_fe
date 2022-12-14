import { gql, useQuery } from "@apollo/client";


const GET_SINGLE_USER = gql`
query GetSingleUser{
    user(id: 1) {
      id
      name
      barCount
      bars{
        id
        name
        drinkCount
      }
    }
  }`;

export const useUserData = (id) => {

    const { loading, error, data } = useQuery(GET_SINGLE_USER, {
        variables: {
            id,
        }
    })
    return { data, error, loading };
};