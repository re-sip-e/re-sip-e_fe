import React, { useState } from "react";
import "./SearchPage.css";
// import CocktailInfo from "../CocktailInfo/CocktailInfo";
import { cocktails } from "../mockData";
import NavBar from "../NavBar/NavBar";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import Cocktail from "../Cocktail/Cocktail";
import CocktailContainer from "../CocktailContainer/CocktailContainer";

const SearchPage = () => {
 
  
  const [search, setSearch] = useState("");
  const [searchMsg, setSearchMsg] = useState(
    "Type in the name of a cocktail and get mixing"
    );
    const [results, setResults] = useState("")
    const { loading, error, data } = useSearch(search);
    
    
    // if (loading) {
    //   setResults("Loading...")
    // } else if (error) {
    //   setResults("Oops! Something went wrong")
    // } else if (data.apiDrinks.length !== 25) {
    //   let filteredResults = data.apiDrinks.map((drink) => <Cocktail cocktail={drink} key={drink.id}/>)
    //   setResults(filteredResults)
    // }

    // if (error) {
    //   return <div>Oops! Something went wrong</div>
    // }

    // if (data) {
    //   setResults(data)
    // }
    // turn ^ into if else
    // ask piper if she could turn the modal into component
    

     
const handleChange = (event) => {
  event.preventDefault();
  setSearch(event.target.value)
}

  const handleClick = (e) => {
    e.preventDefault();
    if (!search) {
      setSearchMsg(
        "Sorry, we don't serve that drink here. Search for another..."
        );
        setSearch("");
      }
    };
    console.log(results)


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
            onChange={(event) => handleChange(event)}
          />
          <button onClick={(e) => handleClick(e)} className="go-btn">go</button>
        </form>
        {loading ? <div>Loading...</div> : null}
        {data ? 
        <div className="search-results">
        <CocktailContainer cocktails={data.apiDrinks}/>
        </div> : null}
      </article>
    </section>
  );
};

export default SearchPage;
