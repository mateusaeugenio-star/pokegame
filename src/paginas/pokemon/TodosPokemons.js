                                                             
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodosPokemons.css';
import useFetchpokeapi from '../../hooks/usefetchpokeapi';
import { Link, useParams } from "react-router-dom";
                                     
function TodosPokemons() {
    const {id} = useParams();
                                          
const {myPokemon,loading,error} = useFetchpokeapi (id);
  if (loading) return <div className='loader'> carregando pokedex...</div>;
  if (error) return <div className='error'>ocorreu um erro inesperado</div>;
                                                              
  return (                                      
    <div className={`App ${myPokemon.tipo}`}>
  <div className="Pokemon-container">
    <div className={`Pokemon-card ${myPokemon.tipo}`}>
      <h1>poke card</h1>                      
      <h3>{myPokemon.nome}</h3>           
         <h2 className='tipo-pokemon1'>{myPokemon.tipo}</h2>
         <img src={myPokemon.imagem} alt={myPokemon.nome}
         style={{ width: '150px', height: '150px' }} />
          <h3>
          Vida: {myPokemon.vida*10}
          </h3>  
          <h3>
          Ataque: {myPokemon.ataque}
          </h3>  
  <Link to="/"><button className="voltar"/></Link>                         
                                                                
             </div>                                     
       </div>                                            
     </div>                                                                 
  );                                                                         
}                                                                                              

export default TodosPokemons;  
                                          
                                                                