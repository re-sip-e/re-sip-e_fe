import { gql, useQuery } from "@apollo/client";

const GET_SEARCH_QUERY = gql`
  query GetSearchQuery($name: String!) {
    apiDrinks(query: $name) {
      id
      name
      imgUrl
      steps
      ingredients {
        description
      }

    }
  }
`;

export const useSearch = (name) => {
  const { loading, error, data } = useQuery(GET_SEARCH_QUERY, {
    variables: {
      name,
    },
  });
  return { data, error, loading };
};

