import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './MapOverview.css'
import {
    Grid,
} from "react-mdl";

import Scooter from '../../scooter.png';
import Bicycle from '../../bicycle.png';
import Car from '../../car.png';
import Walk from '../../walk.png';
import Bus from '../../bus.png';
import ButtonWithImage from "../ButtonWithImage/ButtonWithImage";
import UsersService from "../../services/UsersService";


function handleOnCLickButton(event) {
    console.log("handleOnCLickButton" + event);
    console.log(event);

}

function setUser() {

}

function MapOverview(props) {

    let user = null;

    UsersService.getUser(localStorage.getItem("userId"))
        .then(res => user = res.data[0]);


    return (
        <React.Fragment>

            <div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                                src="https://maps.google.com/maps?q=MyDigitalSchool%20angers&t=&z=11&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">

                        </iframe>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default MapOverview;
