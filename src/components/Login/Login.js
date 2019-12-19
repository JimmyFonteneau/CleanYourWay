import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Icon, Tab, Tabs} from "react-mdl";
import { Button, Textfield } from 'react-mdl';
import logo from '../../../src/logo.svg';
import flou from '../../../src/flou.jpg';
import { Link } from "react-router-dom";
import UsersService from "../../services/UsersService";


function Login() {
    let email = "", password = "";

    let [error, setError] = React.useState(false);

    async function checkUserConnection() {
        console.log(" " +email + password);
        let response = await UsersService.getUserByEmailAndPassword(email, password);
        console.log(response.data);

        let user  = response.data[0];

        if (user && user.id) {
            localStorage.setItem("userId", user.id);
            window.location.assign("/account");
        } else {
            setError(true);
        }

    }



  return (

    <div  className="App-body" style={{ flexDirection: 'column', display: 'flex', backgroundImage: `url(${flou})`, backgroundSize: 'cover' }}>
    <img src={logo} className="App-logo" alt="logo" />                  
         <Textfield
          onBlur={(e) => { email = e.target.value}}
          label="Email"
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          error="Le format d'email n'est pas valide"
          floatingLabel
          style={{ width: '200px' }}
        />

        <Textfield
          onBlur={(e) => { password = e.target.value}}
          label="Mot de passe"
          floatingLabel
          style={{ width: '200px' }}
        />    
        {error && <p style={{color: "red"}}>Invalid password or email</p>}
        <Button
            style={{ backgroundColor: 'white' }}
            onClick={checkUserConnection}
        >
            Login
          {/*<Link to="/app">Login</Link>*/}
        </Button>

  </div>      
  );
}

export default Login;
