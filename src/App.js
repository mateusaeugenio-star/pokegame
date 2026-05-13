import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinador from "./Treinador";
import Pokemon from "./pokecard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Treinador />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
