import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState(loadFavorites());

  function loadFavorites() {
    const favoritesData = localStorage.getItem("favorites");
    const loadedFavorites = JSON.parse(favoritesData);
    console.log(loadedFavorites);
    return loadedFavorites;
  }

  function handleClickRemove(id) {
    console.log(id)
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.idDrink !== id
    );
    const sendingData = JSON.stringify(updatedFavorites);
    localStorage.setItem("favorites", sendingData);
    setFavorites(updatedFavorites);
  }

  return (
    <div className="text-black bg-white bg-opacity-90 flex-grow items-center min-h-[100vh] h-fit rounded-sm border-t-4 border-pink-900 mb-5">
      <div className="text-4xl font-semibold mt-5 text-pink-700">Favorites</div>
      {favorites?.length ? (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-5 m-auto gap-10">
          {favorites?.map((drink, index) => (
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
              <button
                className="bg-pink-800 text-white py-1 mb-5 mt-3"
                onClick={() => handleClickRemove(drink.idDrink)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-5 m-auto gap-10">
          <div className="text-gray-800 text-lg text-center">
            No drinks favorited yet.
          </div>
        </div>
      )}
    </div>
  );
}
