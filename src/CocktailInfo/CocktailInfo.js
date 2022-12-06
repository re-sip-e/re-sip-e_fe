import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import { Heading, Spinner } from "@chakra-ui/react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import EditCocktail from "../EditCocktail/EditCocktail";
import axios from "axios";
import { from } from "@apollo/client";
import { RefetchQueriesFunction } from "@apollo/client";
import { RefetchQueriesResult } from "@apollo/client";

const CocktailInfo = ({ cocktailId, cocktailData }) => {
  //   const indCocktail = cocktails.find(
  //     (oneCocktail) => oneCocktail.id === cocktailId
  //   );

  const [choosenCocktail, setCocktail] = useState({});

  const getOneCocktail = gql`
    query {
      apiDrink(id: ${cocktailId}){
        id
        name
        steps
        imgUrl
        ingredients {
          name
          quantity
        }
      }
    }
      `;
  //   const client = new ApolloClient({
  //     uri: "https://re-sip-e-be.fly.dev/graphql",
  //     cache: new InMemoryCache(),
  //   });
  //   console.log(useQuery(getOneCocktail));
  const { loading, error, data } = useQuery(getOneCocktail);

  //   console.log(data);
  //   console.log(loading);
  //   console.log(error);
  //   console.log({ error, data, loading });
  //   console.log(oneCocktail);
  //   useQuery(getOneCocktail)
  //     .then((result) => {
  //       console.log(result.data);
  //     })
  //     .catch((err) => console.log(err.message));
  //   const fetchData = async () => {};
  //   const { error, data, loading } = useQuery(getOneCocktail);
  //   const getData = async () => {
  //     const { data } = await client.query({
  //       query: gql`
  //         query {
  //           apiDrink(id: ${cocktailId}){
  //             id
  //             name
  //             steps
  //             imgUrl
  //             ingredients {
  //               name
  //               quantity
  //             }
  //           }
  //         }
  //           `,
  //     });
  //     console.log(data);
  //     setCocktail(data);
  //   };

  //   useEffect(() => {
  //     if (!loading && data.apiDrink?.length > 0) {
  //       console.log(data, "this is the data");
  //       setCocktail(data.apiDrink);
  //     } else {
  //       console.log("no data yet");
  //     }
  //   }, [data]);

  const updateCocktail = (id) => {
    const ingredientIndex = choosenCocktail.ingredients.map((ingredient) => {
      return ingredient.id;
    });
    choosenCocktail.ingredients.splice(ingredientIndex.indexOf(id), 1);
    setCocktail({ choosenCocktail });
  };

  const updateSteps = (steps) => {
    const stepsString = steps.join(", ");
    console.log(choosenCocktail.steps);
    choosenCocktail.steps = stepsString;
    setCocktail({ choosenCocktail });
  };

  //   return
  //   const { loading, error, data } = useQuery(getOneCocktail);
  //   console.log(data);
  //   console.log(error);
  //   if (loading) {
  //     return <Spinner />;
  //   }
  //   if (error) {
  //     return <h1>Error occured</h1>;
  //   }
  //   console.log(choosenCocktail);
  console.log(data);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <NavBar />
      <Heading as="h1" size="4xl">
        {/* {cocktail[0].name} */}
      </Heading>
      <h2>{`Steps: ${data.apiDrink.steps}`}</h2>
      <img src={data.apiDrink.imgUrl} />
      <h3>
        {data.apiDrink.ingredients.map((ingredient) => {
          return `  ${ingredient.quantity} of ${ingredient.name} `;
        })}
      </h3>
      <EditCocktail
        choosenCocktail={data.apiDrink}
        updateCocktail={updateCocktail}
        updateSteps={updateSteps}
      />
    </div>
  );
};

export default CocktailInfo;
