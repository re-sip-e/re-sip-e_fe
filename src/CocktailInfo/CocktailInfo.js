import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import { Heading } from "@chakra-ui/react";

const CocktailInfo = ({ cocktail }) => {
  return (
    <div>
      <NavBar />
      <Heading as="h1" size="4xl">{cocktail}</Heading>
    </div>
  )
};

export default CocktailInfo;
