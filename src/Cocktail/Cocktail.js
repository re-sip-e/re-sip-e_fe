import { Link } from "react-router-dom";
import "./Cocktail.css";

const Cocktail = ({ cocktail }) => {
  console.log(cocktail)
  return (
    <Link
      to={`/${cocktail.name}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="cocktail"
        style={{
          backgroundImage: `url(${cocktail.imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <h3>{cocktail.name}</h3>
      </div>
    </Link>
  );
};

export default Cocktail;
