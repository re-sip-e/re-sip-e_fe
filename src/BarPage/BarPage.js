import React from "react";
import { useParams } from "react-router-dom";
import CocktailContainer from "../CocktailContainer/CocktailContainer";
import NavBar from "../NavBar/NavBar";
import { useBarData } from "../hooks/useBarData";

const BarPage = ({ id }) => {

 
    const { loading, error, data } = useBarData(id);

    if (loading) {
        return <div>Loading...</div>
      }
  
      if (error) {
        return <div>Oops! Something went wrong</div>
      }

    // const { id } = useParams();
    console.log({loading, error, data})

  const getBarDrinks = <CocktailContainer cocktails={data.bar.drinks}/>


//   const getBarData = data.bar.drinks.map((bar) => {
//     return (
//       <section className="bar-info" key={bar.id}>
//         <h1>{bar.name}</h1>
//         <div className="add-btn-box">
//           <button>Add your own</button>
//           <button>Add by searching</button>
//         </div>
//       </section>
//     );
//   });

  return (
    <section className="bar-page">
      <NavBar />
      {/* {getBarData} */}
      {getBarDrinks}
    </section>
  );
};

export default BarPage;
