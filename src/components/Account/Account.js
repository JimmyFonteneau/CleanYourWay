import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


function Account() {
  return (   
    <div className="Account" style={{ display: 'flex', paddingTop: '50px', flexDirection: 'column' }}>      
       <div>
         Photo
       </div>
       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         PROFIL 
       </div>
       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         <div> Bulle 1 </div>
         <div> Bulle 2 </div>
         <div> Bulle 3 </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         Choisissez votre moyen de transport 
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div> Transport 1 </div>
        <div> Transport 2 </div>
        <div> Transport 3 </div>
        <div> Transport 4 </div>
      </div>     
    </div>   
  );
}

export default Account;