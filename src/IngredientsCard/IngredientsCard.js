import "./IngredientsCard.css";
import { CloseIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

const IngredientCard = ({ ingredient, deleteIngredient, editIngredient }) => {
  return (
    <div className="ingredient">
      <p>
        <Input
          value={`${ingredient.quantity} ${ingredient.name}`}
          onChange={(event) => editIngredient(event)}
        />
      </p>
      <CloseIcon onClick={() => deleteIngredient(ingredient)} />
    </div>
  );
};

export default IngredientCard;
