import React, { useState } from "react";
import { Link } from "react-router-dom";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import NavBar from "../NavBar/NavBar";
import { useBarData } from "../hooks/useBarData";
import { Heading, Button } from "@chakra-ui/react";
import "./BarPage.css";
import EditCocktail from "../EditCocktail/EditCocktail";

const BarPage = ({ id }) => {
  const { loading, error, data } = useBarData(id);
  const [checkBar, setCheckBar] = useState(true);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something went wrong</div>;
  }

  const getBarDrinks = (
    <CocktailContainer cocktails={data.bar.drinks} checkBar={checkBar} />
  );

  return (
    <section className="bar-page">
      <NavBar />
      <Heading as={"h2"} size="4xl" className="bar-link">
        {data.bar.name}
      </Heading>
      <div className="add-btn-box">
        <EditCocktail choosenCocktail={null} />
        <Link to="/search">
          <Button colorScheme="gray">Add by searching</Button>
        </Link>
      </div>
      {getBarDrinks}
    </section>
  );
};

export default BarPage;
