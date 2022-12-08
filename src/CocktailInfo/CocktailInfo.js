import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import "./CocktailInfo.css";
import { Heading, Spinner } from "@chakra-ui/react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import EditCocktail from "../EditCocktail/EditCocktail";
import axios from "axios";
import { from } from "@apollo/client";
import { RefetchQueriesFunction } from "@apollo/client";
import { RefetchQueriesResult } from "@apollo/client";

const CocktailInfo = ({ cocktailId, checkBar }) => {
  const [choosenCocktail, setCocktail] = useState({});
  const [query, setQuery] = useState();
  console.log(cocktailId);
  const apiDrink = gql`
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
  const barDrink = gql`
    query {
      drink(id: ${cocktailId}) {
        id
        name
        imgUrl
        steps
        createdAt
        updatedAt
        bar {
          id
          name
        }
        ingredients {
          name
          quantity
          createdAt
          updatedAt
        }
      }
    }
          `;

  const { loading, error, data } = useQuery(checkBar ? barDrink : apiDrink);
  console.log(checkBar);
  //   const { loading, error, data } = useQuery(barDrink);

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

  console.log(loading);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <NavBar />
      <div className="cocktail-details">
        <Heading as="h1" size="4xl">
          {data.apiDrink.name}
        </Heading>
        <h2>{`Steps: ${data.apiDrink.steps}`}</h2>
        <img src={data.apiDrink.imgUrl} />
        <h3>
          {data.apiDrink.ingredients.map((ingredient) => {
            return `  ${ingredient.quantity} of ${ingredient.name} `;
          })}
        </h3>
        {checkBar ? (
          <EditCocktail
            choosenCocktail={data.apiDrink}
            updateCocktail={updateCocktail}
            updateSteps={updateSteps}
          />
        ) : null}
      </div>
    </div>
  );
};

export default CocktailInfo;
