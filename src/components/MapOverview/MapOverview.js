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

const infoStyles = {
    display: "flex",
    borderRadius: "150px",
    width: "60px",
    height: "60px",
    backgroundColor: "green",
    alignItems: "center",
    textAlign: "center",
    color: "white"

};

class MapOverview extends React.Component {

    // loadUser = (id) => {
    //     UsersService.getUser(id).then(
    //         res => this.setState({user: res.data})
    //     );
    // };

    constructor(props) {
        super(props);
        this.typeOfTransportation = props.id;
        switch (props.id) {
            case "Car":
                this.sourceImage = Car;
                break;
            case "Scooter":
                this.sourceImage = Scooter;
                break;
            case "Bicycle":
                this.sourceImage = Bicycle;
                break;
            case "Walk":
                this.sourceImage = Walk;
                break;
            case "Bus":
                this.sourceImage = Bus;
                break;
            default:
                this.sourceImage = Car;

        }
        this.state = {
            user: {
                'address': {
                    home: 'Adresse de yann',
                    work: 'Urban adresse',
                }
            }
        };

        //this.loadUser(localStorage.getItem("userId"));

    }

    // console.log(user);

    render() {
        return (
            <React.Fragment>

                <div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="100%" height="100%" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=MyDigitalSchool%20angers&t=&z=11&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">

                            </iframe>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "20px", marginRight: "20px"}}>
                        <ButtonWithImage
                            styles={{backgroundColor: "blue"}}
                            src={this.sourceImage}
                            callback={()=> {}}
                            id={this.typeOfTransportation}
                            col={6}
                        />
                        <div >
                            <p>
                                De
                                : <span>{this.state.user && this.state.user.address ? this.state.user.address.home : ""}</span>
                                <br/>
                                À
                                : <span>{this.state.user && this.state.user.address ? this.state.user.address.work : ""}</span>

                            </p>
                            <p>
                                Distance :
                                <span> 5,12 Km</span>
                            </p>
                        </div>

                    </div>
                    <hr/>

                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <div style={infoStyles}>
                            -0,49g CO2
                        </div>

                        <div style={infoStyles}>
                            +28 euros
                        </div>

                        <div style={infoStyles}>
                            + 9 points
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default MapOverview;
