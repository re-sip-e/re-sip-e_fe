import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import CocktailInfo from "../CocktailInfo/CocktailInfo";
import { Heading, Spinner } from "@chakra-ui/react";
import Profile from "../Profile/Profile";
import SearchPage from "../SearchPage/SearchPage";
import BarPage from "../BarPage/BarPage";
import NavBar from "../NavBar/NavBar";
import siteLogo from "../../assets/re-sip-e.png";

const App = () => {
  const [checkBar, setCheckBar] = useState(false);
  const [inBar, setInBar] = useState(true);

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
    <main className="main">
      <div className="loader"><Spinner size="xl" speed=".8s" color="white" /></div>
    </main>
  ) : error ? (
    <Heading className="error-heading">Sorry there was an error. Click <u><a href="http://localhost:3000">here</a></u> to go back home!</Heading>
  ) : (
    <main className="main">
      <Switch>
        <Route exact path="/profile">
          <div className="user-page">
            <Profile />
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
              <div className="welcome">
                <div className="welcome-logo">
                  <img src={siteLogo} alt="re-sip-e logo" height="700" width="700" />
                </div>
                <p className="story"> 
                  Your bar's new go-to black book solution. <b><i>RE-SIP-E</i></b> collects and stores your bar's drink program for seamless connectivity within your team.
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
