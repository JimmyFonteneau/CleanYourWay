import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


function Parametres() {
  return (

      <div className="Account"
           style={{display: 'flex', paddingTop: '50px', flexDirection: 'column', alignItems: 'center'}}>
          <p>Yan</p>
          <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', textAlign: "center", marginTop: "20px"}}>
              <div>
                  <p style={{padding: "8px", marginBottom: "0", backgroundColor: "lightblue", borderRadius: "50px"}}> Prendre le bus 5 fois cette semaine </p>
                  <span > 2 / 5 </span>
              </div>
          </div>
          <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', textAlign: "center", marginTop: "20px"}}>
              <div>
                  <p style={{padding: "8px", marginBottom: "0", backgroundColor: "lightgreen", borderRadius: "50px"}}> Utiliser son vélo aujourd'hui </p>
                  <span > 1 / 1 </span>
              </div>
          </div>
          <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', textAlign: "center", marginTop: "20px"}}>
              <div>
                  <p style={{padding: "8px", marginBottom: "0", backgroundColor: "#0066ff", borderRadius: "50px"}}> Emmener un collègue en covoiturage </p>
                  <span> 0 / 1 </span>
              </div>
          </div>
      </div>
  );
}

export default Parametres;