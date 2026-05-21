import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Zubat.css';
import useFetchpokeapi from '../../hooks/usefetchpokeapi';

function Zubat() {
  const {pokemons,loading,error} = useFetchpokeapi ("zubat");


  if (loading) return <
    div className='loader'> carregando pokedex...
  </div>;

  if (error) return <div className='error'>
  ocorreu um erro inesperado
  </div>;

  return (
    <div className="App2">
  <div className="pekemon-container">
    <div className="pokemon-card2">
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

export default Zubat;  