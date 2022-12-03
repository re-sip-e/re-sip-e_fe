import Cocktail from "../Cocktail/Cocktail";
import "./CocktailContainer.css";
const CocktailContainer = ({ cocktails }) => {
  const allCocktails = cocktails.map((cocktail) => {
    return (
      <div key={cocktail.id}>
        <Cocktail cocktail={cocktail} />
      </div>
    );
  });
  return <div className="cocktails">{allCocktails}</div>;
};

export default CocktailContainer;
