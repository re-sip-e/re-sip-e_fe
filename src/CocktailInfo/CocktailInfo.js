import { cocktails } from "../mockData";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import EditCocktail from "../EditCocktail/EditCocktail";
// import { cocktails } from "../mockData";
const CocktailInfo = ({ cocktail }) => {
  console.log(cocktails);
  const indCocktail = cocktails.find(
    (oneCocktail) => oneCocktail.name === cocktail
  );
  console.log(indCocktail);
  return (
    <div>
      <h1>{cocktail}</h1>
      <EditCocktail cocktail={indCocktail} />
    </div>
  );
};

export default CocktailInfo;
