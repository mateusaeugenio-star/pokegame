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
    const [myType , setMyType]= useState('');

    useEffect(() => {
      const getMyType = async () => {
        try {
        if(pokemons.types[0].type.name == 'normal' || pokemons.types[0].type.name == 'fighter'){
          setMyType  ('corpo');
        } else if(pokemons.types[0].type.name == 'psychic' || pokemons.types[0].type.name == 'fairy'){
        
          setMyType  ('mente');
        }else if(pokemons.types[0].type.name == 'ghost' || pokemons.types[0].type.name == 'dark'){
        
          setMyType  ('sombra');
       
        }else if(pokemons.types[0].type.name == 'grass' || pokemons.types[0].type.name == 'bug' || pokemons.types[0].type.name == 'poison'){
          setMyType('natureza');
        
        }else if(pokemons.types[0].type.name == 'water' || pokemons.types[0].type.name == 'ice'){
          setMyType('agua');
         
        }else if(pokemons.types[0].type.name == 'ground' || pokemons.types[0].type.name == 'steel' || pokemons.types[0].type.name == 'rock'){
          setMyType('terra');
          
        }else if(pokemons.types[0].type.name == 'electric' || pokemons.types[0].type.name == 'flying' || pokemons.types[0].type.name == 'dragon'){
          setMyType('tempestade');
  
        }else if(pokemons.types[0].type.name == 'fire'){
          setMyType('fogo');
        };
        } catch (err) {
          console.log(err);
        }
      };  
      getMyType();
    }, [pokemons]);


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
      if (!pokemons.name) return;

      // Mapeia os nomes das evoluções com segurança
      const evo1 = evolution?.chain?.species?.name || null;
      const evo2 = evolution?.chain?.evolves_to?.[0]?.species?.name || null;
      const evo3 = evolution?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.name || null;

      setMypokemon({
        nome:  pokemons.name,
        vida:  pokemons.stats[0].base_stat,
        ataque:  pokemons.stats[1].base_stat,
        tipo:  myType,
        imagem:  pokemons.sprites.other['official-artwork'].front_default,
        imagemShiny:  pokemons.sprites.other['official-artwork'].front_shiny,
        // Salvando os 3 estágios no objeto do pokemon
        evo1,
        evo2,
        evo3
      });
    } catch (err) {
      console.log(err);
    }
  };  
  setPoke();
}, [evolution, pokemons, myType]); // Adicionado myType nas dependências para garantir a atualização do tipo

// Garanta que o objeto retornado nunca seja nulo ou indefinido
return { 
  myPokemon: myPokemon || {}, 
  loading, 
  error 
};
}

export default useFetchpokeapi;