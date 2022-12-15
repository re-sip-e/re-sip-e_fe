import Cocktail from "../Cocktail/Cocktail";
import "./CocktailContainer.css";
const CocktailContainer = ({ cocktails, checkBar }) => {
  console.log(cocktails);
  const allCocktails = cocktails.map((cocktail) => {
    return (
      <div key={cocktail.id}>
        <Cocktail cocktail={cocktail} checkBar={checkBar} />
      </div>
    );
  });
  return <div className="cocktails">{allCocktails}</div>;
};

export default CocktailContainer;
