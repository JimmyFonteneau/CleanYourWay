import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';



function Savings() {
  return (

    <div  className="App-body" style={{ flexDirection: 'column', display: 'flex'}}>
    <p>Mes économies</p>
    <p> Aujourd'hui : 2 euros</p>
    <p> Ce mois-ci : 10 euros</p>
    <p> Cette année : 150 euros </p>
    <p> Globale : 1200 euros </p>

  </div>      
  );
}

export default Savings;
