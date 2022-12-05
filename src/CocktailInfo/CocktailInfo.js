import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EditCocktail from "../EditCocktail/EditCocktail";

const CocktailInfo = ({ cocktail, cocktailData }) => {
  console.log(cocktailData[0])
  const indCocktail = cocktails.find(
    (oneCocktail) => oneCocktail.name === cocktail
  );

  console.log(indCocktail);
  const [choosenCocktail, setCocktail] = useState(indCocktail);

  const updateCocktail = (id) => {
    const ingredientIndex = indCocktail.ingredients.map((ingredient) => {
      return ingredient.id;
    });
    indCocktail.ingredients.splice(ingredientIndex.indexOf(id), 1);
    console.log(choosenCocktail);
    setCocktail({ indCocktail });
  };
  return (
    <div>
      <NavBar />
      <Heading as="h1" size="4xl">{cocktail[0].name}</Heading>
      <h2>{`Steps: ${cocktailData[0].steps.toLowerCase()}`}</h2>
      <img
        src={cocktailData.imgUrl} />
      <h3>{cocktailData[0].ingredients.map((ingredient) => { return `  ${ingredient.quantity} ${ingredient.unit} of ${ingredient.name} ` })}</h3>
     < EditCocktail
        choosenCocktail={choosenCocktail}
        updateCocktail={updateCocktail}
      />
    </div>
  )
}

export default CocktailInfo;
