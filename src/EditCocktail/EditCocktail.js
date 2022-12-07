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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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
  const [newQuantity, setNewQuantity] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newStep, setNewStep] = useState("");
  const [allIngredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false)

  useEffect(() => {
    setIngredients(choosenCocktail.ingredients);
    const stepsArray = choosenCocktail.steps
      .split(" and")
      .join(",")
      .split(", ");
    setSteps(stepsArray);
  }, []);

  const handleChange = (event) => {
    console.log(event);
    if (event.target.name === "cocktailName") {
      setCocktailName(event.target.value);
    } else if (event.target.name === "newIngredient") {
      setNewIngredient(event.target.value);
    } else if (event.target.name === "newUnit") {
      setNewUnit(event.target.value);
    } else {
      setNewStep(event.target.value);
    }
  };

  const handleUnitChange = (event) => {
    setNewQuantity(event);
  };

  const deleteIngredient = (ingredient) => {
    const newArray = [...allIngredients];
    newArray.splice(allIngredients.indexOf(ingredient), 1);
    setIngredients(newArray);
  };

  const deleteStep = (step) => {
    const allSteps = [...steps];
    allSteps.splice(steps.indexOf(step), 1);
    console.log("hello");
    setSteps(allSteps);
  };

  const addStep = () => {
    setSteps([...steps, newStep]);
    clearInputs();
  };

  const clearInputs = () => {
    setNewStep("");
  };

  const addIngredient = () => {
    setIngredients([
      ...allIngredients,
      {
        __typename: "Ingredient",
        name: newIngredient,
        quantity: `${newQuantity} ${newUnit}`,
      },
    ]);
    console.log(allIngredients);
  };

  const submitEdit = () => {
    if (allIngredients.length === 0 || steps.length === 0) {
      setError(true)
      setMessage("Please fill out all fields!");
    } else {
      setMessage("Saved Successfully!")
      setError(false)
    }
    // const edditedDrink = {
    //   id: choosenCocktail.id,
    //   imgUrl: choosenCocktail.imgUrl,
    //   ingredients: allIngredients,
    // name: cocktailName,
    // steps: steps.join(', ')
    // __typename: "Drink"
    // };
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
              {error ? 
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                 {message}
                </AlertDescription>
              </Alert> : null}
              <Ingredients
                ingredients={allIngredients}
                deleteIngredient={deleteIngredient}
                handleChange={handleChange}
                addIngredient={addIngredient}
                handleUnitChange={handleUnitChange}
              />
            </FormControl>
            <FormControl mr={4}>
              <Steps
                steps={steps}
                deleteStep={deleteStep}
                handleChange={handleChange}
                addStep={addStep}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              variant="outline"
              onClick={() => submitEdit()}
            >
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
