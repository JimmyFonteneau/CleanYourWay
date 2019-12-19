import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import { Link } from "react-router-dom";

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
                        <Link to="/account" onClick={() => this.hideToggle()}>Account</Link>
                        <Link to="/savings" onClick={() => this.hideToggle()}>Mes économies</Link>
                        </Navigation>
                    </Drawer>

                    <Content>                     
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }

}

export default Menu;
