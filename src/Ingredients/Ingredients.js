import IngredientCard from "../IngredientsCard/IngredientsCard";
import "./Ingredients.css";
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Ingredients = ({
  ingredients,
  deleteIngredient,
  handleChange,
  addIngredient,
  handleUnitChange,
  editIngredient,
}) => {
  //   const unitArray = [];
  //   const splitIngredients = ingredients.flatMap((ingredient) => {
  //     return ingredient.quantity.split(" ").forEach((quantity) => {
  //       if (
  //         isNaN(quantity) &&
  //         quantity != "" &&
  //         !parseFloat(quantity) &&
  //         !unitArray.includes(quantity)
  //       ) {
  //         unitArray.push(quantity);
  //       }
  //     });
  //   });

  //   console.log(unitArray);
  const allIngredients = ingredients.map((ingredient) => {
    return (
      <div key={ingredient.id}>
        <IngredientCard
          ingredient={ingredient}
          deleteIngredient={deleteIngredient}
          editIngredient={editIngredient}
        />
      </div>
    );
  });
  return (
    <div>
      <h5 className="ingredients-header">Ingredients</h5>
      <div className="ingredients-container">
        <div className="saved-ingredients">{allIngredients}</div>
        <div className="new-ingredient">
          <Input
            placeholder="Add New Ingredient"
            name="newIngredient"
            onChange={(event) => handleChange(event)}
          />
          <AddIcon onClick={() => addIngredient()} />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
