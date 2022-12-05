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
import React, { useEffect, useState } from "react";
import "./EditCocktail.css";
import Ingredients from "../Ingredients/Ingredients";

const EditCocktail = ({ choosenCocktail, updateCocktail }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [coctailName, setCocktailName] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [newStep, setNewStep] = useState("");
  const [ingredients, setIngredients] = useState({});
  console.log(choosenCocktail);
  useEffect(() => {
    const combinedIngredients = choosenCocktail.ingredients.map(
      (ingredient) => {
        return {
          id: ingredient.id,
          ingredients: `${ingredient.quantity}  ${ingredient.name}`,
        };
      }
    );
    setIngredients(combinedIngredients);
  }, []);
  const handleChange = (event) => {
    if (event.target.name === "cocktailName") {
      setCocktailName(event.target.value);
    } else if (event.target.name === "newIngredient") {
      setNewIngredient(event.target.value);
    } else {
      setNewStep(event.target.value);
    }
  };
  const deleteIngredient = (id) => {
    updateCocktail(id);
    const idIndex = ingredients.map((ingredient) => {
      return ingredient.id;
    });
    ingredients.splice(idIndex.indexOf(id), 1);
    setIngredients(ingredients);
    console.log(ingredients);
  };

  return (
    <>
      <Button onClick={onOpen}>Make it my own!</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Cocktail</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Cocktail</FormLabel>
              <Input
                ref={initialRef}
                placeholder={`${choosenCocktail.name}`}
                name="cocktailName"
                onChange={(event) => handleChange(event)}
              />
            </FormControl>

            <FormControl mr={4}>
              <Ingredients
                ingredients={ingredients}
                deleteIngredient={deleteIngredient}
                handleChange={handleChange}
              />
              {/* <FormLabel>Ingredients</FormLabel>
              <Input placeholder={`${combinedIngredients}`} /> */}
            </FormControl>
            <FormControl mr={4}>
              <FormLabel>Steps</FormLabel>
              <Input placeholder={`${choosenCocktail.steps}`} name="newStep" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} variant="outline">
              Save
            </Button>
            <Button onClick={onClose} colorScheme="blue" variant="outline">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditCocktail;
