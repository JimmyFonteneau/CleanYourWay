import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {
    Grid,
} from "react-mdl";

import Scooter from '../../scooter.png';
import Bicycle from '../../bicycle.png';
import Car from '../../car.png';
import Walk from '../../walk.png';
import Bus from '../../bus.png';
import ButtonWithImage from "../ButtonWithImage/ButtonWithImage";


function handleOnCLickButton(event){
    console.log("handleOnCLickButton" + event);
    console.log(event);

}

function MobilityWay(props) {
    return (
        <React.Fragment>
            <Grid
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}
            >
                <ButtonWithImage
                    styles={{backgroundColor: "blue"}}
                    src={Car}
                    callback={handleOnCLickButton}
                    id={"car"}
                    col={6}
                />

                <ButtonWithImage
                    styles={{backgroundColor: "blue"}}
                    src={Scooter}
                    callback={handleOnCLickButton}
                    id={"Scooter"}
                    col={6}
                />

            </Grid>
            <Grid
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}
            >
                <ButtonWithImage
                    styles={{backgroundColor: "blue"}}
                    src={Bicycle}
                    callback={handleOnCLickButton}
                    id={"Bicycle"}
                />

                <ButtonWithImage
                    styles={{backgroundColor: "blue"}}
                    src={Walk}
                    callback={handleOnCLickButton}
                    id={"Walk"}
                />

                <ButtonWithImage
                    styles={{backgroundColor: "blue"}}
                    src={Bus}
                    callback={handleOnCLickButton}
                    id={"Bus"}
                />
            </Grid>
        </React.Fragment>
    );
}

export default MobilityWay;
