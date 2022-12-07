import React, { useState } from "react";
import "./SearchPage.css";
// import CocktailInfo from "../CocktailInfo/CocktailInfo";
import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SearchPage = ({ findDrinks, setResults }) => {
 
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchMsg, setSearchMsg] = useState(
    "Type in the name of a cocktail and get mixing"
  );

  const handleClick = (e) => {
    e.preventDefault();
    findDrinks(search);
    if (!results || results === undefined) {
      setSearchMsg(
        "Sorry, we don't serve that drink here. Search for another..."
      );
      setSearch("");
    } else if () {
      setSearchResults(results)
    }
  };
  
  console.log(searchResults)

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
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={(e) => handleClick(e)} className="go-btn">go</button>
        </form>
        {/* {data && ( */}
        <div className="search-results">
          {searchResults ? searchResults.map((cocktail) => {
            return (
              <div className="results-cards" key={cocktail.id}>
                <Link
                  to={`/${cocktail.name}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    className="cocktail"
                    style={{
                      backgroundImage: `url(${cocktail.imgUrl})`,
                      backgroundSize: "cover",
                    }}
                    key={cocktail.id}
                  >
                    <h3>{cocktail.name}</h3>
                  </div>
                </Link>
              </div>
            );
          }) : null }
        </div>
      </article>
    </section>
  );
};

export default SearchPage;
