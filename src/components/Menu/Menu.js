import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import { Link } from "react-router-dom";

import MobilityWay from "../MobilityWay/MobilityWay";


class Menu extends React.Component {

    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    render() {
        return (

            <div style={{height: '100vh', position: 'relative'}}>
                <Layout fixedDrawer>
                    <Drawer title="Title">
                        <Navigation>
                        <Link to="/savings" onClick={() => this.hideToggle()}>Mes économies</Link>
                        </Navigation>
                    </Drawer>

                    <Content>
                        <MobilityWay/>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }

}

export default Menu;
