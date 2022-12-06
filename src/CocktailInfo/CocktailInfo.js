import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import { Heading } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import EditCocktail from "../EditCocktail/EditCocktail";

const CocktailInfo = ({ cocktail, cocktailData }) => {
  //   const indCocktail = cocktails.find(
  //     (oneCocktail) => oneCocktail.name === cocktail
  //   );
  const [choosenCocktail, setCocktail] = useState({});
  console.log(cocktail);
  const getOneCocktail = gql`
  query {
    apiDrink(id: ${cocktail.id}){
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
  const { error, data, loading } = useQuery(getOneCocktail);
  console.log({ error, data, loading });
  //   console.log(oneCocktail);
  useEffect(() => {
    console.log({ error, data, loading });
    setCocktail(data);
  }, {});

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
    console.log(choosenCocktail);
  };
  return (
    <div>
      <NavBar />
      <Heading as="h1" size="4xl">
        {cocktail[0].name}
      </Heading>
      <h2>{`Steps: ${cocktailData[0].steps.toLowerCase()}`}</h2>
      <img src={cocktailData.imgUrl} />
      <h3>
        {cocktailData[0].ingredients.map((ingredient) => {
          return `  ${ingredient.quantity} ${ingredient.unit} of ${ingredient.name} `;
        })}
      </h3>
      <EditCocktail
        choosenCocktail={choosenCocktail}
        updateCocktail={updateCocktail}
        updateSteps={updateSteps}
      />
    </div>
  );
};

export default CocktailInfo;
