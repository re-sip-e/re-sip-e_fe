import { Switch, Route } from "react-router-dom";
import "./App.css";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import { cocktails } from "../mockData";
import CocktailInfo from "../CocktailInfo/CocktailInfo";
import { Heading } from '@chakra-ui/react'
import Header from "../Header/Header";
import SearchPage from "../SearchPage/SearchPage";

const App = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/search">
          <SearchPage cocktails={cocktails}/>
        </Route>
        <Route
          exact
          path="/"
          render={() => (
            <div className="home-page">
              <Header />
              <div className="welcome">
                <Heading as="h1" size="4xl">Welcome to Re*sip*e</Heading>
                <p className="story">
                  We are here to help bars and bartender have easy access to
                  their cocktails recipe making it fast and efficient to find
                  the right drink!
                </p>
              </div>
              <div className="favorite-drinks">
                <Heading as="h2" size="2xl">2022's Favorite Drinks</Heading>
                <CocktailContainer cocktails={cocktails} />
              </div>
            </div>
          )}
        ></Route>
        <Route
          exact
          path="/:cocktail"
          render={({ match }) => (
            <div className="cocktail-info">
              <CocktailInfo cocktail={match.params.cocktail} cocktailData={cocktails.filter((cocktail) => { return cocktail.name === match.params.cocktail })} />
            </div>
          )}
        ></Route>
    </Switch>
      </main>
  );
};

export default App;
