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
// import { useEditedCocktail } from "../hooks/useEditedDrink";
import { useMutation, gql } from "@apollo/client";

const EditCocktail = ({ choosenCocktail, updateCocktail, updateSteps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [editedDrink, setEditedDrink] = useState({});
  const [cocktailName, setCocktailName] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newStep, setNewStep] = useState("");
  const [allIngredients, setIngredients] = useState([]);
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

  // econst useEditedCocktail = (id, editedDrink) => {
  //     console.log(id, editedDrink);
  //     const input = {
  //       id: id,
  //       drinkInput: editedDrink,
  //     };
  const [drinkUpdate, { loading, error, data }] = useMutation(
    choosenCocktail ? SEND_DRINK_UPDATE : SEND_NEW_DRINK
  );
  //     console.log(data);
  //   };
  //   useEditedCocktail(choosenCocktail.id, editedDrink);
  console.log(data);
  console.log(updateIngredients);
  useEffect(() => {
    // setIngredients(choosenCocktail.ingredients)

    // setUpdatedIngredients(choosenCocktail.ingredients);
    if (choosenCocktail) {
      const removeTypeName = choosenCocktail.ingredients.map((ingredient) => {
        return {
          ...ingredient,
          __typename: undefined,
        };
      });
      console.log(removeTypeName);
      setUpdatedIngredients(removeTypeName);
      setSteps(choosenCocktail.steps);
    }
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "cocktailName") {
      setCocktailName(event.target.value);
    } else if (event.target.name === "newIngredient") {
      setNewIngredient(event.target.value);
    } else if (event.target.name === "imgURL") {
      setNewImgUrl(event.target.value);
    } else {
      setSteps(event.target.value);
      console.log(steps);
    }
  };

  const deleteIngredient = (ingredient, id) => {
    // const newArray = [...allIngredients];
    // newArray.splice(allIngredients.indexOf(ingredient), 1);
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
    // console.log(allIngredients[allIngredients.indexOf(ingredientIndex)]);
    console.log(addDestroy);
    setUpdatedIngredients(addDestroy);

    // setIngredients(newArray);
  };

  //   const deleteStep = (step) => {
  //     const allSteps = [...steps];
  //     allSteps.splice(steps.indexOf(step), 1);
  //     setSteps(allSteps);
  //   };

  //   const addStep = () => {
  //     setSteps([...steps, newStep]);
  //     clearInputs();
  //   };

  const clearInputs = () => {
    setNewStep("");
  };

  const editIngredient = (event, id) => {
    const ingredientIndex = updateIngredients.find(
      (ingredient) => ingredient.id === id
    );
    const setChange = updateIngredients.map((ingredient) => {
      if (ingredient.id === id) {
        return { ...ingredient, description: event.target.value };
      } else {
        return ingredient;
      }
    });
    console.log(setChange);
    // updateIngredients[updateIngredients.indexOf(ingredientIndex)].description =
    //   event.target.value;
    // console.log(event.target.value);
    setUpdatedIngredients(setChange);
    console.log(updateIngredients);
  };

  const addIngredient = () => {
    console.log(updateIngredients);
    // setIngredients([
    //   ...allIngredients,
    //   {
    //     id: null,
    //     __typename: "Ingredient",
    //     name: choosenCocktail.name,
    //     description: newIngredient,
    //   },
    // ]);
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
    console.log(updateIngredients);
  };

  const submitEdit = () => {
    console.log(allIngredients);
    console.log(steps);

    if (choosenCocktail) {
      const editedDrink = {
        imgUrl: choosenCocktail.imgUrl,
        ingredients: updateIngredients,
        name: cocktailName,
        steps: steps,
        //   __typename: "Drink",
      };
      // setIngredients([...allIngredients, edditedDrink]);
      setEditedDrink(editedDrink);
      drinkUpdate({
        variables: {
          input: { id: choosenCocktail.id, drinkInput: editedDrink },
        },
      });
      // sendMutation(editedDrink);
    } else {
      const newDrink = {
        name: cocktailName,
        steps: steps,
        imgUrl: newImgUrl,
        barId: 1,
        ingredients: updateIngredients,
      };
      console.log(newDrink);
      //   drinkUpdate({
      //     variables: {
      //       input: { drinkInput: newDrink },
      //     },
      //   });
    }
    console.log(editedDrink);
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
              <Steps
                steps={steps}
                // deleteStep={deleteStep}
                handleChange={handleChange}
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
