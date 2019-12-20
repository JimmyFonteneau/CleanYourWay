import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';



function Savings() {
  return (

    <div  className="savings" style={{ display: 'flex', paddingTop: '20vh', flexDirection: 'column', alignItems: 'center' }}>
    <p style={{ backgroundColor: '#77C689', borderRadius: '15px', padding: '10px' }}>Mes économies</p>
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}> 
      <p> Aujourd'hui :</p> <p>2€</p>  
    </div>    
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}> 
      <p> Ce mois-ci :</p> <p>10€</p>  
    </div>    
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}> 
      <p> Cette année :</p> <p>150€</p>  
    </div>   
    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}> 
      <p> Globale :</p> <p>1200€</p>  
    </div>   
  </div>      
  );
}

export default Savings;
