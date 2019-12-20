import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import {Link} from "react-router-dom";

class Menu extends React.Component {

    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    render() {
        return (

            <div style={{height: '100vh', position: 'relative'}}>
                <Layout fixedDrawer>
                    <Drawer title="Menu">
                        <Navigation>
                            <a onClick={() => {
                                this.hideToggle();
                                window.location.assign("/account");
                            }}>Accueil</a>
                            <Link to="/savings" onClick={() => this.hideToggle()}>Mes économies</Link>
                            <Link to="/challenges" onClick={() => this.hideToggle()}>Challenges</Link>
                            <Link to="/classement" onClick={() => this.hideToggle()}>Classement</Link>
                            <Link to="/parametres" onClick={() => this.hideToggle()}>Paramètres</Link>
                            <a href="https://xd.adobe.com/view/f57ea2ad-103c-4042-46fd-dde220c1b56b-834f/" target={"blank"}><i>Maquette</i></a>

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
