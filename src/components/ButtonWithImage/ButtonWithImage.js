import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {
    Button,

} from "react-mdl";

const buttonStyles = {

    display: "flex",
    borderRadius: '150px',
    backgroundColor: 'green',
    height: '50px',
    width: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    // cursor: "pointer",
    margin: "5px",

};

const imageStyles = {

    height: '30px',
    width: '30px',
};


function ButtonWithImage({styles, src, callback, id}) {

    let myButtonStyles = {...buttonStyles, ...styles};

    function handleOnClickDiv(event){
        callback(id);
    }
    return (
        <React.Fragment>
            <div id={id} style={myButtonStyles} onClick={handleOnClickDiv}>

                <img src={src} style={imageStyles} alt={""}/>

            </div>
        </React.Fragment>
    );
}

export default ButtonWithImage;
