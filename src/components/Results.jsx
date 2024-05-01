import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Results({ url }) {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noDrinks, setNoDrinks] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getApi() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDrinks(data.drinks);
          setLoading(false);
          setNoDrinks(false);
        })
        .catch((error) => {
          console.error("Erro ao obter os dados:", error);
          setNoDrinks(true);
          setLoading(false);
        });
    }
    getApi();
  }, [url]);
  console.log(url);

  console.log(drinks);
  return (
    <div className="flex flex-col item-center mt-5 min-h-[30vh]">
      <div className="text-pink-700 font-semibold">
        Total - {drinks?.length || 0} Drinks
      </div>
      {!loading && !noDrinks ? (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-5 m-auto gap-10">
          {drinks?.map((drink, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-400 rounded-sm items-center shadow-md bg-white cursor-pointer"
            >
              <Link to={`/cocktail/${drink.idDrink}`}>
                <img className="w-48" src={drink.strDrinkThumb} />
                <div className="p-3">
                  <div className="text-gray-500">
                    {drink.strCategory ? drink.strCategory : null}
                  </div>
                  <div className="text-yellow-600 font-semibold text-lg">
                    {drink.strDrink}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-5 m-auto gap-10">
          <div className="text-gray-800 text-lg text-center">
            No drinks found. Try another search!
          </div>
        </div>
      )}
    </div>
  );
}
