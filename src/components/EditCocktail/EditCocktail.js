import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
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
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./EditCocktail.css";
import Ingredients from "../Ingredients/Ingredients";
import Steps from "../Steps/Steps";
import { useMutation, gql } from "@apollo/client";

const EditCocktail = ({ choosenCocktail }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [editedDrink, setEditedDrink] = useState({});
  const [cocktailName, setCocktailName] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [updateIngredients, setUpdatedIngredients] = useState([]);
  const [steps, setSteps] = useState("");
  const [newImgUrl, setNewImgUrl] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setError] = useState(false);

  const SEND_DRINK_UPDATE = gql`
    mutation ($input: DrinkUpdateInput!) {
      drinkUpdate(input: $input) {
        drink {
          id
          name
          steps
          imgUrl
          ingredients {
            id
            description
          }
        }
      }
    }
  `;
  const SEND_NEW_DRINK = gql`
    mutation ($input: DrinkCreateInput!) {
      drinkCreate(input: $input) {
        drink {
          id
          name
          steps
          imgUrl
          ingredients {
            id
            description
          }
        }
      }
    }
  `;

  const [drinkUpdate, { loading, error, data }] = useMutation(
    choosenCocktail ? SEND_DRINK_UPDATE : SEND_NEW_DRINK
  );

  useEffect(() => {
    if (choosenCocktail) {
      const removeTypeName = choosenCocktail.ingredients.map((ingredient) => {
        return {
          ...ingredient,
          __typename: undefined,
        };
      });
      setUpdatedIngredients(removeTypeName);
      setCocktailName(choosenCocktail.name);
      setSteps(choosenCocktail.steps);
      setNewImgUrl(choosenCocktail.imgUrl);
    }
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "cocktailName") {
      setCocktailName(event.target.value);
    } else if (event.target.name === "newIngredient") {
      setNewIngredient(event.target.value);
    } else if (event.target.name === "imgURL") {
      setNewImgUrl(event.target.value);
    } else {
      setSteps(event.target.value);
    }
  };

  const deleteIngredient = (id) => {
    const ingredientIndex = updateIngredients.find(
      (ingredient) => ingredient.id === id
    );
    const foundIngredient =
      updateIngredients[updateIngredients.indexOf(ingredientIndex)];
    const addDestroy = updateIngredients.map((ingredient) => {
      if (ingredient.id === id) {
        return {
          ...foundIngredient,
          _destroy: true,
        };
      } else {
        return ingredient;
      }
    });
    setUpdatedIngredients(addDestroy);
  };

  const editIngredient = (event, id) => {
    const setChange = updateIngredients.map((ingredient) => {
      if (ingredient.id === id) {
        return { ...ingredient, description: event.target.value };
      } else {
        return ingredient;
      }
    });
    setUpdatedIngredients(setChange);
  };

  const addIngredient = () => {
    if (!choosenCocktail) {
      setUpdatedIngredients([
        ...updateIngredients,
        { description: newIngredient },
      ]);
    } else {
      setUpdatedIngredients([
        ...updateIngredients,
        {
          id: null,
          description: newIngredient,
        },
      ]);
    }
  };

  const submitEdit = () => {
    if (choosenCocktail) {
      const editedDrink = {
        imgUrl: choosenCocktail.imgUrl,
        ingredients: updateIngredients,
        name: cocktailName,
        steps: steps,
      };
      setEditedDrink(editedDrink);
      drinkUpdate({
        variables: {
          input: { id: choosenCocktail.id, drinkInput: editedDrink },
        },
      });
    } else {
      const newDrink = {
        name: cocktailName,
        steps: steps,
        imgUrl: newImgUrl,
        barId: 1,
        ingredients: updateIngredients,
      };
      drinkUpdate({
        variables: {
          input: { drinkInput: newDrink },
        },
      });
    }
    setError(false);
    setMessage("Saved Successfully!");
  };

  const checkInputField = (event) => {
    let checkIngredients = [];
    updateIngredients.forEach((ingredient) => {
      if (!ingredient._destroy) {
        checkIngredients.push(ingredient);
      }
    });
    if (checkIngredients.length === 0 || steps === "") {
      setError(true);
      setMessage("Please fill out all fields!");
    } else if (!cocktailName) {
      setError(true);
      setMessage("Please fill out all fields completely!");
    } else if (!newImgUrl) {
      setError(true);
      setMessage("Please fill out all fields completely!");
    } else {
      submitEdit();
    }
  };
  console.log(message);
  return (
    <>
      <Button size={'lg'} color='white' bgColor="#37867B" _hover={{background: "#307168"}} onClick={onOpen}>
        {choosenCocktail ? "Make it my own!" : "Add New Drink"}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="edit-modal-label">Edit Cocktail</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel className="cocktail-label">Cocktail</FormLabel>
              <Input
                ref={initialRef}
                value={
                  choosenCocktail ? `${choosenCocktail.name}` : "Cocktail Name"
                }
                name="cocktailName"
                onChange={(event) => handleChange(event)}
                className="cocktail-input"
              />
            </FormControl>
            <FormControl>
              <FormLabel className="image-url-label">Image URL</FormLabel>
              <Input
                ref={initialRef}
                value={
                  choosenCocktail ? `${choosenCocktail.imgUrl}` : "Image URL"
                }
                name="imgURL"
                onChange={(event) => handleChange(event)}
                className="img-input"
              />
            </FormControl>
            <FormControl mr={4}>
              <Ingredients
                ingredients={updateIngredients}
                deleteIngredient={deleteIngredient}
                handleChange={handleChange}
                addIngredient={addIngredient}
                editIngredient={editIngredient}
              />
            </FormControl>
            <FormControl mr={4}>
              <Steps steps={steps} handleChange={handleChange} />
              {errorMessage || error ? (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>
                    {message !== "Saved Successfully!" ? "Error!" : "Saved"}
                  </AlertTitle>
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              ) : null}
              {message === "Saved Successfully!" ? (
                <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>Saved</AlertTitle>
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              ) : null}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              variant="outline"
              onClick={(event) => checkInputField(event)}
              className="save-add-button"
            >
              {choosenCocktail ? "Save" : "Add drink"}
            </Button>
            <Button onClick={onClose} colorScheme="teal" variant="outline">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditCocktail;
