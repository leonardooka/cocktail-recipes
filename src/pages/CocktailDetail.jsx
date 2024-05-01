import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CocktailDetail() {
  const [details, setDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function getDetails() {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDetails(data.drinks[0]);
          groupIngredients(data.drinks[0]);
          checkIfFavorited(data.drinks[0].idD)
        })
        .catch((error) => {
          console.error("Erro ao obter os dados:", error);
        });
    }

    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      const loadedFavorites = JSON.parse(favoritesData);
      setFavorites(loadedFavorites);
      console.log(details)
    }

    getDetails();
  }, []);

  function checkIfFavorited(id) {
    if (loadedFavorites.some(favorite => favorite.idDrink === id)){
      setIsFavorite(true)
    }
  }

  function groupIngredients(data) {
    if (data) {
      const filteredIngredients = [];
      for (let i = 0; i < 15; i++) {
        console.log(i);

        if (data[`strIngredient${i}`])
          filteredIngredients.push({
            ingredient: data[`strIngredient${i}`],
            measure: data[`strMeasure${i}`],
          });
      }
      setIngredients(filteredIngredients);
    }
  }

  function handleClickFavorites(request) {
    let favoritesClone = [...favorites];
    console.log(favoritesClone)
    console.log(details)
    if (request === "add") {
      if (favorites.some((favorite) => favorite.idDrink === details.idDrink)) {
        console.log('true')
        setIsFavorite(true);
        return;
      }
      favoritesClone.push(details);
      console.log(favoritesClone)
      setIsFavorite(true);
    } else {
      console.log('removing')
      favoritesClone = favoritesClone.filter(
        (favorite) => favorite.idDrink !== details.idDrink
      );
      setIsFavorite(false);
    }
    console.log(favoritesClone)
    setFavorites(favoritesClone);
    const sendingData = JSON.stringify(favoritesClone);
    localStorage.setItem('favorites', sendingData);
  }

  return (
    <div className="text-black bg-white bg-opacity-90 flex-grow items-center min-h-[100vh] h-fit rounded-sm border-t-4 border-pink-900 mb-5">
      {details ? (
        <div className="flex flex-col m-auto p-10">
          <div className="text-[8vh] font-medium text-yellow-600">
            {details.strDrink}
          </div>
          <div className="flex flex-wrap mt-10 border md:space-x-10 space-x-5">
            <div className="w-2/4 flex flex-col">
              <img
                className="rounded-sm"
                src={details.strDrinkThumb}
                alt={details.strDrink}
              />
              <div className="p-5">
                {isFavorite ? (
                  <button
                    className="xl:w-2/4 bg-pink-700 text-white"
                    onClick={() => handleClickFavorites("remove")}
                  >
                    Remove From Favorites
                  </button>
                ) : (
                  <button
                    className="xl:w-2/4 bg-pink-700 text-white"
                    onClick={() => handleClickFavorites("add")}
                  >
                    Add to Favorites
                  </button>
                )}
              </div>
            </div>
            <div className="flex-grow">
              <div className="text-left text-2xl text-pink-800 font-semibold">
                Ingredients
              </div>
              <div className="flex flex-col mt-5">
                {ingredients?.map((ingredient, index) => (
                  <div key={index} className="flex flex-wrap ml-2 text-lg">
                    <div>{ingredient.ingredient}</div>
                    <div>
                      {ingredient.measure ? (
                        <div>- {ingredient.measure}</div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-left text-2xl mt-10 text-pink-800 font-semibold">
                Instructions
              </div>
              <div className="text-left text-lg ml-2 mt-5">
                {details.strInstructions}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
