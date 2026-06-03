import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Luta.css';

function Luta() {
  return (
    <div className="App3">
      <div className="luta-card">
        <h1>centro da guerra</h1>
        <Link to="/"><button className="voltar"/></Link>
      </div>
    </div>
  );
};
  export default Luta;