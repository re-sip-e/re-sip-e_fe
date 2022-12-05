import IngredientCard from "../IngredientsCard/IngredientsCard";
import "./Ingredients.css";
import { Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Ingredients = ({ ingredients, deleteIngredient, handleChange }) => {
  console.log(ingredients);
  const allIngredients = ingredients.map((ingredient) => {
    return (
      <div key={ingredient.id}>
        <IngredientCard
          id={ingredient.id}
          ingredient={ingredient.ingredients}
          deleteIngredient={deleteIngredient}
        />
      </div>
    );
  });
  return (
    <div className="ingredients-container">
      <h5 className="ingredients-header">Ingredients</h5>
      <div className="saved-ingredients">{allIngredients}</div>
      <div className="new-ingredient">
        <Input
          placeholder="Add New Ingredient"
          name="newIngredient"
          onChange={(event) => handleChange(event)}
        />
        <AddIcon />
      </div>
    </div>
  );
};

export default Ingredients;
