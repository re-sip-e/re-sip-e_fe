import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import { cocktails } from "../mockData";
import CocktailInfo from "../CocktailInfo/CocktailInfo";
import { Heading, Spinner } from "@chakra-ui/react";
import Header from "../Header/Header";
import SearchPage from "../SearchPage/SearchPage";
import BarPage from "../BarPage/BarPage";

const App = () => {
  const threeFavorites = gql`
    query {
      threeRandomApiDrinks {
        id
        name
        imgUrl
      }
    }
  `;
  const { error, data, loading } = useQuery(threeFavorites);

  return loading ? (
    <Spinner size="xl" speed=".8s" />
  ) : error ? (
    <h1>Sorry thre was an error</h1>
  ) : (
    <main className="main">
      <Switch>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route
          exact
          path="/bar/:id"
          render={({ match }) => {
            return <BarPage id={parseInt(match.params.id)} />;
          }}
        ></Route>
        <Route
          exact
          path="/"
          render={() => (
            <div className="home-page">
              <Header />
              <div className="welcome">
                <Heading as="h1" size="4xl">
                  Welcome to Re*sip*e
                </Heading>
                <p className="story">
                  We are here to help bars and bartender have easy access to
                  their cocktails recipe making it fast and efficient to find
                  the right drink!
                </p>
              </div>
              <div className="favorite-drinks">
                <Heading as="h2" size="2xl">
                  2022's Favorite Drinks
                </Heading>
                <CocktailContainer cocktails={data.threeRandomApiDrinks} />
              </div>
            </div>
          )}
        ></Route>
        <Route
          exact
          path="/:id"
          render={({ match }) => (
            <div className="cocktail-info">
              <CocktailInfo cocktailId={match.params.id} />
            </div>
          )}
        ></Route>
      </Switch>
    </main>
  );
};

export default App;
