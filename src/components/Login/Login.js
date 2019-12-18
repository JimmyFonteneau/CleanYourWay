import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Icon, Tab, Tabs} from "react-mdl";
import { Button, Textfield } from 'react-mdl';
import logo from '../../../src/logo.svg';
import bck from '../../../src/homeBackground.jpg';
import { Link } from "react-router-dom";

function Login() {
  return (

    <div  className="App-body" style={{ flexDirection: 'column', display: 'flex', backgroundImage: `url(${bck})`, backgroundSize: 'cover' }}>
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

        <Button  style={{ backgroundColor: 'white' }}      
        >         
          <Link to="/login">Login</Link>
        </Button>

  </div>      
  );
}

export default Login;
