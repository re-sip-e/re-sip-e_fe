import React from "react";
import { Link } from "react-router-dom";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import NavBar from "../NavBar/NavBar";
import { useBarData } from "../hooks/useBarData";
import { Heading, Button } from "@chakra-ui/react";
import "./BarPage.css";


const BarPage = ({ id }) => {
  const { loading, error, data } = useBarData(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something went wrong</div>;
  }

  const getBarDrinks = <CocktailContainer cocktails={data.bar.drinks} />;

  return (
    <section className="bar-page">
      <NavBar />
      <Heading as={"h2"} size="3xl">
        {data.bar.name}
      </Heading>
      <div className="add-btn-box">
        <Button colorScheme="gray">Add your own</Button>
        <Link to="/search">
        <Button colorScheme="gray">Add by searching</Button>
        </Link>
      </div>
      {getBarDrinks}
    </section>
  );
};

export default BarPage;
