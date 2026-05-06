import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import pokemon from "./pokecard";

function App(){
    return(
    <div className="App">
    <h1>Treinador</h1>
    <h2> Avatar</h2>
    <img className='perfil'
    src="https://imgs.search.brave.com/QJ5kdi9zcIiJtd-yhbawr01ZCaa4zDwTUNirFn-u1-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Bv/a2Vtb24vaW1hZ2Vz/LzMvM2YvTl9CVy5w/bmcvcmV2aXNpb24v/bGF0ZXN0P2NiPTIw/MTEwMjEwMjE1OTMz"
    style={{ width: '150px', height: '150px' }}/>
    <h3>nome: Mateus A Eugenio</h3>
    <h3>idade: 18</h3>
    <h3>nickname: pal4din</h3>
    <h3>pokemon: 1</h3>
    <h3>0 bagdges</h3>
   <button></button>
   
    </div>
       /* 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<pokemon/>}/>
            </Routes>
        </BrowserRouter>*/
    )
}

export default App;