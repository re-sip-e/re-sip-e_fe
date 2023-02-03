import React, { useState } from "react";
import { Link } from "react-router-dom";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import NavBar from "../NavBar/NavBar";
import { useBarData } from "../../hooks/useBarData";
import { Heading, Button, Spinner, Input, filter } from "@chakra-ui/react";
import "./BarPage.css";
import EditCocktail from "../EditCocktail/EditCocktail";

const BarPage = ({ id }) => {
  const { loading, error, data } = useBarData(id);
  const [checkBar, setCheckBar] = useState(true);
  const [filteredDrinks, setFilteredDrink] = useState([]);

  let sortedDrinks;
  const filterDrinks = (event) => {
    const filterByName = sortedDrinks.filter((drink) => {
      return drink.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    filterByName.length
      ? setFilteredDrink(filterByName)
      : setFilteredDrink("None");
  };

  if (loading) {
    return (
      <main className="main">
        <div className="loader">
          <Spinner className="loader" size="xl" speed=".8s" color="white" />
        </div>
      </main>
    );
  }

  if (error) {
    return <div>Oops! Something went wrong</div>;
  }
  if (data) {
    const allDrinks = [...data.bar.drinks];
    sortedDrinks = allDrinks.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    return (
      <section className="bar-page">
        <NavBar />
        {error ? (
          <Heading>Oops! Something went wrong</Heading>
        ) : (
          <div className="bar-info">
            <Heading as={"h2"} size="4xl" className="bar-link">
              {data.bar.name}
            </Heading>
            <div className="add-btn-box">
              <EditCocktail choosenCocktail={null} />
              <Link to="/search">
                <Button
                  size={"lg"}
                  color="white"
                  bgColor="#37867B"
                  _hover={{ background: "#307168" }}
                >
                  Add by searching
                </Button>
              </Link>
            </div>
            <Input
              placeholder="Search Your Drinks"
              width="20rem"
              onChange={(event) => filterDrinks(event)}
            />
            {typeof filteredDrinks === "string" ? (
              <div>
                <Heading as={"h4"}>
                  The drink you are looking for is not in your bar
                </Heading>
              </div>
            ) : (
              <CocktailContainer
                cocktails={
                  filteredDrinks.length ? filteredDrinks : sortedDrinks
                }
                checkBar={checkBar}
              />
            )}
          </div>
        )}
      </section>
    );
  }
};

export default BarPage;
