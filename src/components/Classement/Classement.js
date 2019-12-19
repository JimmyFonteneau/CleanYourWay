import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';



function Classement() {
  return (

    <div  className="classement" style={{ display: 'flex', paddingTop: '50px', flexDirection: 'column', alignItems: 'center' }}>
    <p style={{ backgroundColor: '#77C689', borderRadius: '15px' }}>Classement</p>
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}> 
      <p> Le premier </p> <p>Didier</p>  
    </div>    
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}> 
      <p> Le second </p> <p>Jean mi </p>  
    </div>    
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}> 
      <p> Le troisième </p> <p>Carlos</p>  
    </div>       
  </div>      
  );
}

export default Classement;
