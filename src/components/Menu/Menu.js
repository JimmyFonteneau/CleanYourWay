import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import { Link } from "react-router-dom";

function Menu(props) {
  return (

      <div style={{height: '100vh', position: 'relative'}}>
          <Layout fixedHeader>
              <Header title={<strong>The Title</strong>}>

              </Header>

              <Drawer title="Title">
                  <Navigation>
                  <Link to="/savings">Mes économies</Link>
                  </Navigation>
              </Drawer>

              <Content>
                  {props.children}
              </Content>
          </Layout>
      </div>
  );
}

export default Menu;
