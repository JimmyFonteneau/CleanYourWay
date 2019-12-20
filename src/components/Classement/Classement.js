import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


function Classement() {
    return (

        <div className="classement"
             style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20vh'}}>
            <p style={{backgroundColor: '#77C689', borderRadius: '15px', padding: '10px'}}>Classement</p>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                <p> Le premier </p> <p>Didier</p>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                <p> Le second </p> <p>Jean mi </p>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
                <p> Le troisième </p> <p>Carlos</p>
            </div>
        </div>
    );
}

export default Classement;
