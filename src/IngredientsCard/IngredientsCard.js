import "./IngredientsCard.css";
import { CloseIcon } from "@chakra-ui/icons";

const IngredientCard = ({ ingredient, deleteIngredient }) => {
  return (
    <div className="ingredient">
      <p>
        {ingredient.quantity} {ingredient.name}
      </p>
      <CloseIcon onClick={() => deleteIngredient(ingredient)} />
    </div>
  );
};

export default IngredientCard;
