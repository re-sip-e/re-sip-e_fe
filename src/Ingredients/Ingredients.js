import IngredientCard from "../IngredientsCard/IngredientsCard";
import "./Ingredients.css";
import { Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Ingredients = ({
  ingredients,
  deleteIngredient,
  handleChange,
  addIngredient,
  editIngredient,
  newIngredient,
}) => {
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
            value={newIngredient}
          />
          <AddIcon onClick={() => addIngredient()} />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
