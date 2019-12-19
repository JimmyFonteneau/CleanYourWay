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
                          <a onClick={() => {
                              this.hideToggle();
                              window.location.assign("/account");
                          }}>Account</a>
                          <Link to="/savings" onClick={() => this.hideToggle()}>Mes économies</Link>
                          <Link to="/challenges" onClick={() => this.hideToggle()}>Challenges</Link>
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
