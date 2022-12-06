import "./IngredientsCard.css";
import { CloseIcon } from "@chakra-ui/icons";

const IngredientCard = ({ ingredient, deleteIngredient }) => {
  console.log(ingredient);
  return (
    <div className="ingredient">
      <p>{ingredient}</p>
      <CloseIcon onClick={() => deleteIngredient(ingredient)} />
    </div>
  );
};

export default IngredientCard;
