// import "./BarCocktailInfo.css";
import { useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import NavBar from "../NavBar/NavBar";
import { Heading, Spinner } from "@chakra-ui/react";
import EditCocktail from "../EditCocktail/EditCocktail";

const BarCocktailInfo = ({ cocktailId, checkBar }) => {
  const [choosenCocktail, setCocktail] = useState({});
    // const getOneCocktail;
//   if (checkBar !== "") {
    const getOneCocktail = gql`
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
//   } else {

//   }
  const { loading, error, data } = useQuery(getOneCocktail);

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

  console.log(data);
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
        <EditCocktail
          choosenCocktail={data.apiDrink}
          updateCocktail={updateCocktail}
          updateSteps={updateSteps}
        />
      </div>
    </div>
  );
};

export default BarCocktailInfo;
