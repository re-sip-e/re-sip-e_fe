import React, { useState } from "react";
import { Link } from "react-router-dom";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import NavBar from "../NavBar/NavBar";
import { useBarData } from "../../hooks/useBarData";
import { Heading, Button, Spinner } from "@chakra-ui/react";
import "./BarPage.css";
import EditCocktail from "../EditCocktail/EditCocktail";

const BarPage = ({ id }) => {
  const { loading, error, data } = useBarData(id);
  const [checkBar, setCheckBar] = useState(true);
  if (loading) {
    return (
      <main className="main">
        <div className="loader"><Spinner size="xl" speed=".8s" color="white" /></div>
      </main>
    );
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
            <Button size={'lg'} color='white' bgColor="#37867B" _hover={{background: "#307168"}}>Add by searching</Button>
          </Link>
        </div>
        <CocktailContainer cocktails={data.bar.drinks} checkBar={checkBar} />
      </div>
      )}
    </section>
  );
};

export default BarPage;
