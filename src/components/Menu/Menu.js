import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import MobilityWay from "../MobilityWay/MobilityWay";


function Menu(props) {
    return (

        <div style={{height: '100vh', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title={<strong>The Title</strong>}>

                </Header>

                <Drawer title="Title">
                    <Navigation>
                        <a href="">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Drawer>

                <Content>
                    <MobilityWay></MobilityWay>
                    {props.children}
                </Content>
            </Layout>
        </div>
    );
}

export default Menu;
