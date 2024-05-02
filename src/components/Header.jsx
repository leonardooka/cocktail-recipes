import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [selectedPage, setSelectedPage] = useState(null);


  return (
    <div className="w-full h-[13vh] p-5 flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-5 w-1/2 justify-between items-center">
        <Link to="/">
          <div className="text-[4vh] text-left font-semibold text-pink-600 italic align-baseline" onClick={() => setSelectedPage('home')}>
            Cocktail Recipes
          </div>
        </Link>
        <div className="flex flex-col md:flex-row items-center ml-10 content-center space-x-0 md:space-x-10">
          <Link to="/">
            <div className={selectedPage === 'home' ? "cursor-pointer text-2xl text-pink-500 font-semibold hover:text-pink-600 text-center" : "cursor-pointer text-2xl hover:text-pink-600 text-center"} onClick={() => setSelectedPage('home')}>
              Home
            </div>
          </Link>
          <Link to="/favorites" onClick={() => setSelectedPage('favorites')}>
            <div className={selectedPage === 'favorites' ? "cursor-pointer text-2xl text-pink-500 font-semibold hover:text-pink-600 text-center" : "cursor-pointer text-2xl hover:text-pink-600 text-center"}>
              Favorites
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-xl">
        <div className="flex flex-row space-x-2 md:space-x-5 items-center">
          <div className="cursor-pointer hover:text-pink-600">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="cursor-pointer hover:text-pink-600">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="cursor-pointer hover:text-pink-600">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
