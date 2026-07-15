import React from 'react';
import './TodosPokemons.css';
import useFetchpokeapi from '../../hooks/usefetchpokeapi';
import { Link, useParams } from "react-router-dom";
                                     
function TodosPokemons() {
  const { id } = useParams();
                                          
  const { myPokemon, loading, error } = useFetchpokeapi(id);

  if (loading) return <div className='loader'>carregando pokedex...</div>;
  if (error) return <div className='error'>ocorreu um erro inesperado</div>;
                                                              
  return (                                      
    <div className={`App ${myPokemon?.tipo || ''}`}>
      <div className="Pokemon-container">
        <div className={`Pokemon-card ${myPokemon?.tipo || ''}`}>
          <h1>poke card</h1>                      
          <h3>{myPokemon?.nome}</h3>           
          <h2 className='tipo-pokemon1'>{myPokemon?.tipo}</h2>
          
          {myPokemon?.imagem && (
            <img 
              src={myPokemon.imagem} 
              alt={myPokemon.nome}
              style={{ width: '150px', height: '150px' }} 
            />
          )}

          <h3>Vida: {myPokemon?.vida ? myPokemon.vida * 10 : 0}</h3>  
          <h3>Ataque: {myPokemon?.ataque || 0}</h3>  
          
          {/* Botão de Voltar */}
          <Link to="/">
            <button className="voltar" />
          </Link>                         
          
          {/* Botões de Evolução Dinâmicos */}
          {myPokemon?.evo1 && (
            <Link to={`/todospokemons/${myPokemon.evo1}`}>
              <button className="evoluçao" title={myPokemon.evo1} />
            </Link>
          )}  

          {myPokemon?.evo2 && (
            <Link to={`/todospokemons/${myPokemon.evo2}`}>
              <button className="evoluçao2" title={myPokemon.evo2} />
            </Link>
          )}  

          {myPokemon?.evo3 && (
            <Link to={`/todospokemons/${myPokemon.evo3}`}>
              <button className="evoluçao3" title={myPokemon.evo3} />
            </Link>
          )}              
        </div>                                     
      </div>                                            
    </div>                                                                 
  );
}

export default TodosPokemons;
                                          
                                                                