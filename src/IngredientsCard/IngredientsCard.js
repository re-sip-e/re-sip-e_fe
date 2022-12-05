import "./IngredientsCard.css";
import { CloseIcon } from "@chakra-ui/icons";

const IngredientCard = ({ id, ingredient, deleteIngredient }) => {
  console.log(id);
  return (
    <div className="ingredient">
      <p>{ingredient}</p>
      <CloseIcon onClick={() => deleteIngredient(id)} />
    </div>
  );
};

export default IngredientCard;
