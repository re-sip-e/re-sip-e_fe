import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./CocktailInfo.css";
import { Alert, Button, Heading, Spinner } from "@chakra-ui/react";
import { useQuery, gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import EditCocktail from "../EditCocktail/EditCocktail";

const CocktailInfo = ({ cocktailId, checkBar }) => {
  const apiDrink = gql`
        query {
          apiDrink(id: ${cocktailId}){
            id
            name
            steps
            imgUrl
            ingredients {
             description 
            }
          }
        }
          `;
  const barDrink = gql`
    query {
      drink(id: ${cocktailId}) {
            id
            name
            imgUrl
            steps
            bar {
              id
              name
            }
            ingredients {
              id
              description
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

  const DELETE_DRINK = gql`
    mutation ($input: DeleteDrinkInput!) {
      deleteDrink(input: $input) {
        success
        errors
      }
    }
  `;

  const { loading, error, data } = useQuery(checkBar ? barDrink : apiDrink);
  const [addDrink, drinkAdded] = useMutation(SEND_NEW_DRINK);
  const [deleteDrink, deleteSuccess] = useMutation(DELETE_DRINK);
  console.log(drinkAdded.data);
  const addToBar = () => {
    const removeTypeName = data.apiDrink.ingredients.map((ingredient) => {
      return {
        ...ingredient,
        __typename: undefined,
      };
    });
    const newDrinkToAdd = {
      name: data.apiDrink.name,
      steps: data.apiDrink.steps,
      imgUrl: data.apiDrink.imgUrl,
      barId: 1,
      ingredients: removeTypeName,
    };
    addDrink({
      variables: {
        input: { drinkInput: newDrinkToAdd },
      },
    });
  };

  const deleteBarDrink = () => {
    deleteDrink({
      variables: {
        input: { id: data.drink.id },
      },
    });
  };

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <NavBar />
      {error ? (
        <Heading className="cocktail-info-error">
          Sorry, couldn't load this drink. Return home.
        </Heading>
      ) : (
        <div className="cocktail-details-container">
          <img src={!checkBar ? data.apiDrink.imgUrl : data.drink.imgUrl} />
          <div className="cocktail-details">
            <Heading as="h1" size="4xl">
              {!checkBar ? data.apiDrink.name : data.drink.name}
            </Heading>
            {drinkAdded.called && drinkAdded.data ? (
              <Alert>Added!</Alert>
            ) : drinkAdded.called && drinkAdded.error ? (
              <Alert>Error occured, try again later!</Alert>
            ) : null}
            {deleteSuccess.data ? <Alert>Deleted!</Alert> : null}
            <div className="ingredients-info">
              <h3>Ingredients:</h3>
              {data.apiDrink
                ? data.apiDrink.ingredients.map((ingredient) => {
                    return (
                      <p key={ingredient.description}>
                        {ingredient.description}
                      </p>
                    );
                  })
                : data.drink.ingredients.map((ingredient) => {
                    return (
                      <p key={ingredient.description}>
                        {ingredient.description}
                      </p>
                    );
                  })}
            </div>
            <Heading as="h2" size="1xl" className="steps">{`Steps: ${
              !checkBar ? data.apiDrink.steps : data.drink.steps
            }`}</Heading>

            {checkBar ? (
              <div>
                <EditCocktail choosenCocktail={data.drink} />
                <a href="/bar/1">
                  <Button onClick={() => deleteBarDrink()}>Delete Drink</Button>
                </a>
              </div>
            ) : (
              <Button onClick={() => addToBar()}>Add to my bar!</Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CocktailInfo;
