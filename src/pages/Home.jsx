import React, { createRef, useState } from "react";
import Results from "../components/Results";

export default function Home() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const ref = createRef();

  const [url, setUrl] = useState("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  const [chosenLetter, setChosenLetter] = useState('A')

  function handleKeyDown(e) {
    const name = e.target.value;
    console.log(name)
    if (e.key === 'Enter') {
      setUrl(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
    }
  }
    

  function handleClickLetter(letter) {
    setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter.toLowerCase()}`)
    setChosenLetter(letter)
  }

  function handleClickIngredient() {
    const ingredientName = ref.current.value
    setUrl(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`)
  }

  return (
    <>
      <div className="flex flex-col bg-[url('./assets/cocktail11-2.jpg')] bg-cover bg-center h-[50vh] rounded-sm">
        <div className="m-auto flex flex-col items-center">
          <div className="text-[3vw] font-semibold">
            Welcome to the Cocktails World
          </div>
          <div class="relative mt-10 lg:w-2/4 md:3/4">
            <input
              type="text"
              class="w-full pl-10 pr-4 py-2 bg-gray-200 text-gray-800 rounded-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-600 bg-opacity-60"
              placeholder="Search cocktails"
              onKeyDown={handleKeyDown}
            />
            <i class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-90 flex-grow h-fit">
        <div className="border-b border-gray-400 min-h-[5vh] flex flex-wrap px-0 md:px-5 py-3 items-center justify-between">
          <div className="flex flex-row md:mb-0 mb-5 mx-5 space-x-5">
            <div className="md:text-lg text-gray-700">Search by letter:</div>
            <div className="flex flex-wrap lg:flex-row space-x-2 md:space-x-3 lg:space-x-5 font-semibold xl:text-xl lg:text-xl md:text-lg sm:text-md">
              {alphabet.map((letter) => (
                <div className={chosenLetter === letter ? "text-pink-700 cursor-pointer" : "text-gray-700 cursor-pointer"} onClick={() => handleClickLetter(letter)}>{letter}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center content-center space-x-5 border-t border-gray-400 md:border-none py-3 m-auto px-4 md:py-0">
            <div className="text-gray-700 text-lg text-center">
              By ingredient:
            </div>
            <div className="flex flex-row">
              <input className="border border-gray-500 rounded-sm text-gray-800" ref={ref}/>
              <button className="ml-2 bg-pink-600 text-[10px] h-7 rounded-sm" onClick={handleClickIngredient}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        <Results url={url} />
      </div>
    </>
  );
}
