import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosPokemons from "./TodosPokemons";
import Treinador from "./paginas/home/Treinador";
import Totodile from "./paginas/totodile/Totodile";
import Zubat from "./paginas/zubat/Zubat";
import Ralts from "./paginas/Ralts/Ralts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TodosPokemons/:id" element={<TodosPokemons />} />
        <Route path="/" element={<Treinador />} />
        <Route path="/Totodile" element={<Totodile />} />
        <Route path="/Zubat" element={<Zubat />} />
        <Route path="/Ralts" element={<Ralts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
