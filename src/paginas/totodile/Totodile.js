import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Totodile.css';
import useFetchpokeapi from '../../hooks/usefetchpokeapi';
function Totodile() {

const {pokemons,loading,error} = useFetchpokeapi ("totodile");
  if (loading) return <
    div className='loader'> carregando pokedex...
  </div>;

  if (error) return <div className='error'>
  ocorreu um erro inesperado
  </div>;

  return (
    <div className="App">
  <div className="pekemon-container">
    <div className="pokemon-card">
      <h1>poke card</h1>  
      <h3>{pokemons.name}</h3>
         <h2 className='tipo-pokemon1'>{pokemons.types[0].type.name}</h2>
         <img src={pokemons.sprites.front_default} alt={pokemons.name}
         style={{ width: '150px', height: '150px' }} />
  <h3>{pokemons.stats[0].stat.name}: {pokemons.stats[0].base_stat}</h3>  {/* hp */}
  <h3>{pokemons.stats[1].stat.name}: {pokemons.stats[1].base_stat}</h3>  {/* attack */}
  <h3>{pokemons.stats[2].stat.name}: {pokemons.stats[2].base_stat}</h3>  {/* defense */}
             </div>
       </div>
     </div>
  
  );
}

export default Totodile;  

