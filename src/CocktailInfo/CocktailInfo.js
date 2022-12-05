import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import { Heading } from "@chakra-ui/react";


const CocktailInfo = ({ cocktail, cocktailData }) => {
  console.log(cocktailData[0])
  return (
    <div>
      <NavBar />
      <Heading as="h1" size="4xl">{cocktail[0].name}</Heading>
      <h2>{`Steps: ${cocktailData[0].steps.toLowerCase()}`}</h2>
      <img
        src={cocktailData.imgUrl} />
      <h3>{cocktailData[0].ingredients.map((ingredient) => { return `  ${ingredient.quantity} ${ingredient.unit} of ${ingredient.name} ` })}</h3>
    </div>
  )
}

export default CocktailInfo;
