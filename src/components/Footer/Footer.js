import React from 'react';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Icon, Tab, Tabs} from "react-mdl";


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
                  <Tab                   style={{width: '33vw'}}
                                         icon={<Icon>Home</Icon>} label="RECENTS" />
                  <Tab                   style={{width: '33vw'}}
                                         icon={<Icon>star</Icon>} label="FAVORITES" />
                  <Tab                   style={{width: '33vw'}}
                                         icon={<Icon></Icon>} label="NEARBY" />
              </Tabs>
      </div>
  );
}

export default Footer;
