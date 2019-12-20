import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import user from "../../user.png";
import {Button, Icon} from "react-mdl";
import turtle from "../../turtle.png";
import deadpool from "../../deadpool.png";
import thor from "../../thor.png";


function Parametres() {
    return (

        <div className="Account" style={{display: 'flex', paddingTop: '12vh', flexDirection: 'column', paddingLeft: "20px", paddingRight: "20px"}}>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                <img src={user} style={{width: '15vw', paddingLeft: '9vw'}}/>
                <p style={{paddingLeft: '5vw'}}>Le super utilisateur</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '5vh'}}>
                <Icon name={"phone"} style={{marginLeft: "15px", marginRight: "15px"}}>

                </Icon>
                <span> 06 28 02 88 12 </span>
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '5vh'}}>
                <Icon name={"email"} style={{marginLeft: "15px", marginRight: "15px"}}>

                </Icon>
                <span> john.john.kingston@gmail.com </span>
            </div>
            <hr/>

            <div style={{marginLeft: "15px", marginRight: "15px"}}>

                <u>Votre adresse</u>
                <p><i>3 rue Mioll, 49300 - Angers</i></p>


            </div>

            <div style={{marginLeft: "15px", marginRight: "15px"}}>

                <u>L'adresse de votre travail</u>
                <p><i>MyDigitalSchool - Angers</i></p>


            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Button
                    style={{backgroundColor: '#77C689', borderRadius: '15px', marginTop: '7vh'}}
                >
                    Modifier votre profil
                </Button>
            </div>
        </div>
    );
}

export default Parametres;