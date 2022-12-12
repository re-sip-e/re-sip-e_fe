import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";

const Cocktail = ({ cocktail, checkBar }) => {
  const [link, setLink] = useState("");
  useEffect(() => {
    console.log(checkBar);
    if (checkBar) {
      setLink(`/bar/1/${cocktail.id}`);
    } else {
      setLink(`/${cocktail.id}`);
    }
  });
  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
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
