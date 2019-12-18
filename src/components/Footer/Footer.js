import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Icon, Tab, Tabs} from "react-mdl";


function Footer() {
  return (

      <div style={{height: '300px', position: 'relative'}}>
              <Tabs
                  value={1}
                  onChange={() => {console.log("clicked on bottom menu")}}
                  variant="fullWidth"
                  indicatorColor="secondary"
                  textColor="secondary"
                  aria-label="icon label tabs example"
              >
                  <Tab icon={<Icon>Home</Icon>} label="RECENTS" />
                  <Tab icon={<Icon>star</Icon>} label="FAVORITES" />
                  <Tab icon={<Icon></Icon>} label="NEARBY" />
              </Tabs>
      </div>
  );
}

export default Footer;
