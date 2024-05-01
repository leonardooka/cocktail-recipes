import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import CocktailDetail from "./pages/CocktailDetail";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className='w-full h-fit overflow-auto bg-[url("./assets/bg-table13-2.jpg")] bg-cover bg-repeat-y'>
      <div className="lg:w-3/4 md:w-full m-auto flex flex-col">
        <Header />
        <div className="flex flex-col h-fit rounded-sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cocktail/:id" element={<CocktailDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
