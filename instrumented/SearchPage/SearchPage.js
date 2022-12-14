import React, { useState } from "react";
import "./SearchPage.css";
import NavBar from "../NavBar/NavBar";
import { Heading } from "@chakra-ui/react";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import { gql, useQuery } from "@apollo/client";

const GET_SEARCH_QUERY = gql`
  query ($query: String!) {
    apiDrinks(query: $query) {
      id
      name
      imgUrl
      steps
      ingredients {
        description
      }
    }
  }
`;

const SearchPage = () => {
  const [drinkToFind, setDrinkToFind] = useState(null);
  const [search, setSearch] = useState("");
  const [searchMsg, setSearchMsg] = useState(
    "Type in the name of a cocktail and get mixing!"
  );
  const { loading, error, data } = useQuery(GET_SEARCH_QUERY, {
    variables: {
      query: drinkToFind,
    },
  });


  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleError = () => {
    if (data.apiDrinks.length === 0) {
      setSearchMsg("Sorry we don't serve that drink here. Search for another!")
    } else {
      setSearchMsg(
        "Type in the name of a cocktail and get mixing!"
      );
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    setDrinkToFind(search);
    handleError();
  };

  return (
    <section className="search-page">
      <NavBar />
      <article className="search-form-container">
        <Heading as="h2" size="3xl">
          Search for your favorite cocktails!
        </Heading>
        <div className="search-msg-box">{searchMsg}</div>
        <form>
          <input
            type="text"
            placeholder="search"
            name="cocktail"
            value={search}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={(e) => handleClick(e)} className="go-btn">
            go
          </button>
        </form>
        {loading ? <div>Loading...</div> : null}
        {data ? (
          <div className="search-results">
            <CocktailContainer cocktails={data.apiDrinks} />
          </div>
        ) : null}
      </article>
    </section>
  );
};

export default SearchPage;
