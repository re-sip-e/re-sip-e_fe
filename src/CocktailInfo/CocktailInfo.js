import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import "./CocktailInfo.css";
import { Button, Heading, Spinner } from "@chakra-ui/react";
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
             description 
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
            bar {
              id
              name
            }
            ingredients {
              id
              description
            }
        }
      }
    
          `;

  const { loading, error, data } = useQuery(checkBar ? barDrink : apiDrink);
  console.log(checkBar);
  //   const { loading, error, data } = useQuery(barDrink);
  console.log(useQuery(barDrink));
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


  return loading ? (
    <Spinner />
  ) : (
    <div>
      <NavBar />
      <div className="cocktail-details">
        <Heading as="h1" size="4xl">
          {data.apiDrink ? data.apiDrink.name : data.drink.name}
        </Heading>
        <h2>{`Steps: ${
          data.apiDrink ? data.apiDrink.steps : data.drink.steps
        }`}</h2>
        <img src={data.apiDrink ? data.apiDrink.imgUrl : data.drink.imgUrl} />
        <h3>
          {data.apiDrink
            ? data.apiDrink.ingredients.map((ingredient) => {
                return ingredient.description;
              })
            : data.drink.ingredients.map((ingredient) => {
                return ingredient.description;
              })}
        </h3>

        {checkBar ? (
          <EditCocktail
            choosenCocktail={data.drink}
            updateCocktail={updateCocktail}
            updateSteps={updateSteps}
          />
        ) : (
          <Button>Add to my bar!</Button>
        )}
      </div>
    </div>
  );
};

export default CocktailInfo;
