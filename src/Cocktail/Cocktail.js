import './Cocktail.css'
const Cocktail = ({ cocktail }) => {
  return (
    <div
      className="cocktail"
      style={{ backgroundImage: `url(${cocktail.imgUrl})` }}
    >
      <h3>{cocktail.name}</h3>
    </div>
  );
};

export default Cocktail;
