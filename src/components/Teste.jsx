import React, { useEffect, useState } from "react";

export default function Teste() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getApi() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDrinks(data.drinks)
        })
        .catch((error) => {
          console.error("Erro ao obter os dados:", error);
        });
    }
    getApi();
  }, []);
  return (
    <div>
      <div className="grid-cols-4 grid-rows-12">All Cocktails</div>
      {
        drinks ? (
          drinks.map((drink, index) => (
              <div key={index} className='flex flex-col'>
                  <div>{drink.strDrink}</div>
                  <img className='w-48' src={drink.strDrinkThumb} />
              </div>
          ))
        ) : null
        }
    </div>
  );
}
