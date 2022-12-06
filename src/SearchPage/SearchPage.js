import React, { useState } from "react";
import "./SearchPage.css";
import CocktailInfo from "../CocktailInfo/CocktailInfo";

const SearchPage = ({ findDrinks, results }) => {
  const [query, setQuery] = useState("");
  const [searchMsg, setSearchMsg] = useState(
    "Type in the name of a cocktail and get mixing"
  );
  const [queryResult, setQueryResult] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    findDrinks(query);
    if (!results) {
      setQueryResult({});
      setSearchMsg(
          "Sorry, we don't serve that cocktail here. Search for another..."
        );
      clearInput();
 
    } else {
      setQueryResult(results);
      setSearchMsg("");
    //   return (
    //     <div>
    //       <img src={results.imgUrl} alt="drink-search-img" />
    //       <h3>{results.name}</h3>
    //     </div>
    //   );
    }
  };

  const clearInput = () => {
    setQuery("");
  };

  let result = queryResult.length ? <CocktailInfo drink={results} /> : null;

  return (
    <section className="search-page">
      <article className="search-form-container">
        <h1>Search for your favorite cocktails!</h1>
        <div className="search-results">
          {searchMsg}
          {result}
        </div>
        <form>
          <input
            type="text"
            placeholder="search"
            name="cocktail"
            value={query}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={(e) => handleClick(e)}>go</button>
        </form>
      </article>
    </section>
  );
};

export default SearchPage;
