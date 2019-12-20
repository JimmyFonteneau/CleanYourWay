import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import MapOverview from '../MapOverview/MapOverview';
import { Button } from 'react-mdl';
import turtle from '../../turtle.png';
import deadpool from '../../deadpool.png';
import thor from '../../thor.png';
import user from '../../user.png';

//let openMapIsRendered = false;

class Account extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
      openMap: false,       
    };
    //this.updateOpenIsRendered = this.updateOpenIsRendered.bind(this);
   }

  //  updateOpenIsRendered() {
  //   openMapIsRendered = true;

  //  }

  componentDidUpdate() {
    console.error('component didmount');
  }

  render () {
    const { openMap } = this.state;
    
    return (   
      <div>
        {openMap ? <MapOverview/> : 
         <div className="Account" style={{ display: 'flex', paddingTop: '50px', flexDirection: 'column' }}>      
         <div>
         <img src={user} style={{ width: '15vw' }}/> 
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         <Button 
            style={{ backgroundColor: '#77C689', borderRadius: '15px' }}            
          >         
          Profil
        </Button>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-around' }}>           
           <div> <img src={turtle} style={{ width: '15vw' }}/>  </div>
           <div> <img src={deadpool} style={{ width: '15vw' }}/>  </div>
           <div> <img src={thor} style={{ width: '15vw' }}/>  </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button 
            style={{ backgroundColor: '#77C689', borderRadius: '15px' }}            
        >         
            Choisissez votre moyen de transport 
        </Button>         
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Button 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px' }}            
        >         
            A pied  
        </Button> 
        <Button 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px' }}            
        >         
            Vélo 
        </Button> 
        <Button 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px' }}            
        >         
            Voiture 
        </Button> 
        <Button 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px' }}            
        >         
            Bus 
        </Button> 
         
          {/* <Button 
            style={{ backgroundColor: 'white' }}  
            onClick={() => this.setState({ openMap: true })}    
          >         
          Valider
        </Button> */}
        </div>     
      </div>  
        }
      </div>      
    );
  }

}

export default Account;