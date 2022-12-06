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
import Steps from "../Steps/Steps";

const EditCocktail = ({ choosenCocktail, updateCocktail, updateSteps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [coctailName, setCocktailName] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [newStep, setNewStep] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const combinedIngredients = choosenCocktail.ingredients.map(
      (ingredient) => {
        return `${ingredient.quantity} ${ingredient.name}`;
      }
    );
    setIngredients(combinedIngredients);
    const stepsArray = choosenCocktail.steps
      .split(" and")
      .join(",")
      .split(", ");
    setSteps(stepsArray);
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

  const deleteIngredient = (ingredient) => {
    ingredients.splice(ingredients.indexOf(ingredient), 1);
    setIngredients(ingredients);
    console.log(ingredients);
  };

  const deleteStep = (step) => {
    steps.splice(steps.indexOf(step), 1);
    setSteps(steps);
    console.log(steps);
    console.log("hello");
  };
  console.log(ingredients);
  console.log(steps);
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
            </FormControl>
            <FormControl mr={4}>
              <Steps steps={steps} deleteStep={deleteStep} />
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
