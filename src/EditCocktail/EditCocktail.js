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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./EditCocktail.css";
import Ingredients from "../Ingredients/Ingredients";
import Steps from "../Steps/Steps";
import { useMutation, gql } from "@apollo/client";

const EditCocktail = ({ choosenCocktail, updateCocktail, updateSteps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [editedDrink, setEditedDrink] = useState({});
  const [cocktailName, setCocktailName] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [updateIngredients, setUpdatedIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [newImgUrl, setNewImgUrl] = useState("");

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
      setSteps(choosenCocktail.steps);
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
      console.log(ingredient.id);
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
  };
  return (
    <>
      <Button onClick={onOpen}>
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
          <ModalHeader>Edit Cocktail</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Cocktail</FormLabel>
              <Input
                ref={initialRef}
                placeholder={
                  choosenCocktail ? `${choosenCocktail.name}` : "Cocktail Name"
                }
                name="cocktailName"
                onChange={(event) => handleChange(event)}
              />
            </FormControl>
            {!choosenCocktail ? (
              <FormControl>
                <FormLabel>Cocktail</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder={"Image URL"}
                  name="imgURL"
                  onChange={(event) => handleChange(event)}
                />
              </FormControl>
            ) : null}
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
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              variant="outline"
              onClick={() => submitEdit()}
            >
              {choosenCocktail ? "Save" : "Add drink"}
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
