import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button, Textfield } from 'react-mdl';
import bck from './homeBackground.jpg';

function App() {
  return (
    <div className="App">     
      <body  className="App-body" style={{ display: 'flex', backgroundImage: `url(${bck})`, backgroundSize: 'cover' }}>
        <img src={logo} className="App-logo" alt="logo" /> 

        <Textfield
          onChange={() => { }}
          label="Email"
          floatingLabel
          style={{ width: '200px' }}
        />
   
        <Textfield
          onChange={() => { }}                    
          label="Mot de passe"
          floatingLabel
          style={{ width: '200px' }}  
        />
        <Button  style={{ backgroundColor: 'white' }}>
          Se connecter
        </Button>
      </body>
    </div>
  );
}

export default App;