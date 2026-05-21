import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosPokemons from "./paginas/pokemon/TodosPokemons";
import Treinador from "./paginas/home/Treinador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/TodosPokemons/:id" element={<TodosPokemons />} />
        <Route path="/" element={<Treinador />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
