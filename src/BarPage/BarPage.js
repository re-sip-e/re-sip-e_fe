// import React from "react";
// import CocktailContainer from "../CocktailContainer/CocktailContainer";
// import NavBar from "../NavBar/NavBar";

// const BarPage = ({ barInfo }) => {
//   const getBarDrinks = barInfo.map((bar) => {
//     bar.drinks.map((drink) => {
//       return (
//         <CocktailContainer
//           id={drink.id}
//           name={drink.name}
//           img_url={drink.img_url}
//         />
//       );
//     });
//   });

//   const getBarData = barInfo.map((bar) => {
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
//   return (
//     <section className="bar-page">
//       <NavBar />
//       {getBarData}
//       {getBarDrinks}
//     </section>
//   );
// };

// export default BarPage;
