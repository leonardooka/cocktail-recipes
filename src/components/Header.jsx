import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-[13vh] p-5 flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-10 w-1/2 justify-between items-center">
        <Link to="/">
          <div className="text-5xl text-left font-semibold text-pink-600 italic align-baseline">
            Cocktail Recipes
          </div>
        </Link>
        <div className="flex flex-col md:flex-row space-x-10">
          <Link to="/">
            <div className="cursor-pointer text-2xl hover:text-pink-600">
              Home
            </div>
          </Link>
          <Link to="/favorites">
            <div className="cursor-pointer text-2xl hover:text-pink-600">
              Favorites
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-xl">
        <div className="flex flex-row space-x-5 items-center">
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
