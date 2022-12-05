import { cocktails } from "../mockData";

const CocktailInfo = ({ cocktail, cocktailData }) => {
  console.log(cocktailData[0])
  return (
    <div>
      <h1>{cocktailData[0].name}</h1>
      <h2>{`Steps: ${cocktailData[0].steps.toLowerCase()}`}</h2>
      <img
        src={cocktailData.imgUrl} />
      <h3>{cocktailData[0].ingredients.map((ingredient) => { return `  ${ingredient.quantity} ${ingredient.unit} of ${ingredient.name} ` })}</h3>
    </div>
  )
}

export default CocktailInfo;
