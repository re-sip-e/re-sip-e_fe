import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import CocktailInfo from "../CocktailInfo/CocktailInfo";
import { Heading, Spinner } from "@chakra-ui/react";
import User from "../Profile/Profile";
import SearchPage from "../SearchPage/SearchPage";
import BarPage from "../BarPage/BarPage";
import NavBar from "../NavBar/NavBar";

const App = () => {
  const [checkBar, setCheckBar] = useState(false);
  const [inBar, setInBar] = useState(true);
  // const [drinkInBar, setDrinkInBar] = useState(true);
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

  const setBarToTrue = () => {
    setCheckBar(true);
  };
  return loading ? (
    <Spinner size="xl" speed=".8s" />
  ) : (
    <main className="main">
      <Switch>
        <Route
          exact
          path="/profile"
        >
          <div className="user-page">
            <User />
          </div>
        </Route>
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
              <NavBar />
              {/* <Header /> */}
              <div className="welcome">
                <Heading as="h1" size="4xl">
                  Welcome to Re*sip*e
                </Heading>
                <p className="story">
                  Your bar's new go-to black book solution. <b><i>Re-sip-e</i></b> collects and stores your bar's drink program for seamless connectivity within your team.
                </p>
              </div>
              <div className="favorite-drinks">
                <Heading as="h2" size="2xl" className="fav-drinks">
                  2022's Favorite Drinks
                </Heading>
                {error ? (
                  <Heading className="home-page-error">
                    Sorry couldn't find these drinks, Try again later!
                  </Heading>
                ) : (
                  <CocktailContainer
                    cocktails={data.threeRandomApiDrinks}
                    checkBar={checkBar}
                  />
                )}
              </div>
            </div>
          )}
        ></Route>
        <Route
          exact
          path="/:id"
          render={({ match }) => (
            <div className="cocktail-info">
              <CocktailInfo cocktailId={match.params.id} checkBar={checkBar} />
            </div>
          )}
        ></Route>
        <Route
          exact
          path="/bar/1/:id"
          render={({ match }) => (
            <div className="cocktail-info">
              <CocktailInfo cocktailId={match.params.id} checkBar={inBar} />
            </div>
          )}
        ></Route>
      </Switch>
    </main>
  );
};

export default App;
