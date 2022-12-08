import "./IngredientsCard.css";
import { CloseIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

const IngredientCard = ({ ingredient, deleteIngredient, editIngredient }) => {
  return (
    <div className="ingredient">
      <p>
        <Input
          value={ingredient.description}
          onChange={(event) => editIngredient(event, ingredient.id)}
        />
      </p>
      <CloseIcon onClick={() => deleteIngredient(ingredient)} />
    </div>
  );
};

export default IngredientCard;
