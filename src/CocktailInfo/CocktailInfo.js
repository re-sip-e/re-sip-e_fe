import { cocktails } from "../mockData";
import React, { useEffect, useState } from "react";
import EditCocktail from "../EditCocktail/EditCocktail";
const CocktailInfo = ({ cocktail }) => {
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
    setCocktail({ indCocktail });
  };
  return (
    <div>
      <h1>{cocktail}</h1>
      <EditCocktail
        choosenCocktail={choosenCocktail}
        updateCocktail={updateCocktail}
      />
    </div>
  );
};

export default CocktailInfo;
