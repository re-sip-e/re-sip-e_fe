import "./IngredientsCard.css";
import { CloseIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

const IngredientCard = ({ ingredient, deleteIngredient, editIngredient }) => {
  return !ingredient._destroy ? (
    <div className="ingredient">
      <p>
        <Input
          value={ingredient.description}
          onChange={(event) => editIngredient(event, ingredient.id)}
        />
      </p>
      <CloseIcon onClick={() => deleteIngredient(ingredient.id)} />
    </div>
  ) : null;
};

export default IngredientCard;
