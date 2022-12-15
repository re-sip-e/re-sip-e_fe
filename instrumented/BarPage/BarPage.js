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


  return (
    <section className="bar-page">
      <NavBar />
      {error ? (
        <Heading>Oops! Something went wrong</Heading>
      ) : (
        <div>
          <Heading as={"h2"} size="4xl" className="bar-link">
            {data.bar.name}
          </Heading>
          <div className="add-btn-box">
            <EditCocktail choosenCocktail={null} />
            <Link to="/search">
              <Button colorScheme="gray">Add by searching</Button>
            </Link>
          </div>
          <CocktailContainer cocktails={data.bar.drinks} checkBar={checkBar} />
        </div>
      )}
    </section>
  );
};

export default BarPage;
