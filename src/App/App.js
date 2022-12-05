import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import { cocktails } from "../mockData";
import CocktailInfo from "../CocktailInfo/CocktailInfo";

const App = () => {
  return (
    <Router>
      <main className="main">
        <Route
          exact
          path="/"
          render={() => (
            <div className="home-page">
              <div className="welcome">
                <h1>Welcome to Re*sip*e</h1>
                <p className="story">
                  We are here to help bars and bartender have easy access to
                  their cocktails recipe making it fast and efficient to find
                  the right drink!
                </p>
              </div>
              <div className="favorite-drinks">
                <h2>2022's Favorite Drinks</h2>
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
      </main>
    </Router>
  );
};

export default App;
