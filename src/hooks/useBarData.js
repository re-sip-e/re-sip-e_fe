import { gql, useQuery } from "@apollo/client";

const GET_BAR_DATA = gql`
  query GetBarData($id: ID!) {
    bar(id: $id) {
      id
      name
      drinkCount
      drinks {
        id
        name
        imgUrl
      }
    }
  }
`;

export const useBarData = (id) => {
  const { loading, error, data } = useQuery(GET_BAR_DATA, {
    variables: {
      id,
    },
  });
  console.log({ loading, error, data });
  return { data, error, loading };
};
