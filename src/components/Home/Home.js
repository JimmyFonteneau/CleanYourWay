import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Icon, Tab, Tabs} from "react-mdl";
import { Button, Textfield } from 'react-mdl';
import './home.css';
import logo from '../../../src/logo.svg';
import bck from '../../../src/homeBackground.jpg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import cywl from '../../../src/cywl.png';

class Home extends React.Component {
  render () {
    return (
 
      <div  className="App-body" style={{ display: 'flex', background: `url(${bck})`, backgroundSize: 'cover' }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '20vh' }}>
        <img src={cywl} className="App-logo" alt="logo" />        
        <Button  style={{ backgroundColor: 'white', marginTop: '15vh' }}      
        >         
          <Link to="/login">Se connecter</Link>
        </Button>
        </div>  
      </div>   
    );
  }
 
}

export default Home;