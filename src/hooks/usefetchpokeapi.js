import React, { useState, useEffect } from 'react';
import axios from 'axios';

  function useFetchpokeapi(Poke) {
    const [pokemons, setPokemons] = useState({}); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [specie, setSpecie] = useState({});
    const [evolution, setEvolution] = useState({});
    const [myPokemon, setMypokemon] = useState({});
    const [ tipo , setPokeTipo]= useState({});



useEffect(() => {
    const getData = async () => {
      try {const res = await
      axios.get(`https://pokeapi.co/api/v2/pokemon/${Poke}`);
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
    if(Poke) getData();
  }, [Poke]); 

  useEffect(() => {
    const getSpecie = async () => {
      try {
        const res = await axios.get(pokemons.species.url, {});
        setSpecie(res.data);
        console.log("Sucesso:", res);
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getSpecie();
 }, [pokemons]); 


  useEffect(() => {
    const getEvolutions = async () => {
      try {
        const res = await axios.get(specie.evolution_chain.url, {});
        setEvolution(res.data);
        console.log("Sucesso:", res)
      } catch (err) {
        console.error("Erro ao carregar API", err);
      }
    };
    getEvolutions();
 }, [specie]); 

 useEffect(() => {
  const setPoke = async () => {
    try {
      setMypokemon({
        nome:  pokemons.name,
        vida:  pokemons.stats[0].base_stat,
        ataque:  pokemons.stats[1].base_stat,
        tipo:  pokemons.types[0].type.name,
        evolucao:  [evolution.chain.evolves_to[0].species.name],
        imagem:  pokemons.sprites.other['official-artwork'].front_default,
        imagemShiny:  pokemons.sprites.other['official-artwork'].front_shiny,
      });
    } catch (err) {
      console.log(err);
    }
  };  
  setPoke();
}, [evolution, pokemons]);

    return{pokemons,loading,error}
}

export default useFetchpokeapi;