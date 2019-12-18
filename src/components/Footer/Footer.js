import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Icon, IconToggle, Tab, Tabs} from "react-mdl";
import { mdiTrophy } from '@mdi/js';
import FontAwesome from 'react-fontawesome';
import {Link} from "react-router-dom";


function Footer() {
    return (

        <div style={{position: 'relative'}}>
            <Tabs

                value={1}
                onChange={() => {console.log("clicked on bottom menu")}}

                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
                style={{width: '100vw'}}
            >
                <Tab style={{width: '33vw'}}
                     label="RECENTS">
                        <Icon name={"search"}>

                        </Icon>

                </Tab>
                <Tab style={{width: '33vw'}}
                     i label="FAVORITES" >
                    <Icon name={"home"}/>

                </Tab>
                <Tab style={{width: '33vw'}}
                     label="NEARBY" >
                    <FontAwesome name="trophy" stack="2x" />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Footer;
