import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokebonito.css';

function Pokemon() {
const [pokemons, setPokemons] = useState ({});
const [loading, setLoading] = useState (true);
const [error, setError] = useState (false);

useEffect(() => {
  const getData = async () => {
    try {const res = await
    axios.get('https://pokeapi.co/api/v2/pokemon/totodile');
        setPokemons(res.data);
        console.log('success:', res.data);
        setLoading(false);
    }
    catch (err)  {
      console.error ("erro ao carregar API", err);
      setLoading(false)
      setError (true)
    }
  };
  getData();
}, {})


  if (loading) return <
    div className='loader'> carregando pokedex...
  </div>;

  if (error) return <div className='erSror'>
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

export default Pokemon;  
