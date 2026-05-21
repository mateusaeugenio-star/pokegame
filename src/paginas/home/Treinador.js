import React from "react";
import { Link } from "react-router-dom";
import './pokelindo.css';
import bokunomiku from '../../assets/treinador.png';


function Treinador() {

  return (

      <div className="treinador-card">
        <h1>Treinador</h1>
        <h2>Avatar</h2>
        <img className="perfil"
          src={bokunomiku}
          style={{ width: '100px', height: '140px' }}
          alt="perfil"
        />
        <h3>nome: Mateus A Eugenio</h3>
        <h3>idade: 18</h3>
        <h3>nickname: pal4din</h3>
        <h3>pokemon: 3</h3>
        <h3>0 badges</h3>
        <Link to="/todosPokemons/totodile"><button className="pokebola"/></Link>
        <Link to="/todospokemons/Zubat"><button className="pokebola"/></Link>
        <Link to="/todospokemons/Ralts"><button className="pokebola"/></Link>
        <Link to="/todospokemons/arceus"><button className="pokebola"/></Link>
        <Link to="/todospokemons/arceus"><button className="pokebola"/></Link>
        <Link to="/todospokemons/arceus"><button className="pokebola"/></Link>
        
      </div>

  );
}

export default Treinador;