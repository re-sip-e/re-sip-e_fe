import { Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = ({ cocktails }) => {
    console.log("hello, why you don't work?")
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (query) => {
    setValue(query);
  };

  return (
    <section className="search-page">
      <NavBar />
      <div className="search-form">
        <Heading as="h2" size="3xl">
          {" "}
          Search for your favorite cocktails!
        </Heading>
        <form>
          <div className="message-box">
            Type the name of a cocktail and get mixing
          </div>
          <input
            type="text"
            placeholder="search"
            name="cocktail-search"
            value={value}
            onChange={handleChange}
          />
          <Link to={`/:${cocktails}`}>
          <button onClick={() => onSearch(value)}>go</button>
          </Link>
        </form>
      </div>
      <div className="dropdown">
        {cocktails
          .filter((drink) => {
            const query = value.toLowerCase();
            const cocktailName = drink.name.toLowerCase();

            return (
              query && cocktailName.startsWith(query) && cocktailName !== query
            );
          }).slice(0, 10)
          .map((drink) => {
            return (
              <div
                onClick={() => onSearch(drink.name)}
                className="drop-down-row"
                key={drink.id}
              >
                {drink.name}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SearchPage;
