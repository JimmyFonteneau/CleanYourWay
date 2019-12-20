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
         <div className="Account" style={{ display: 'flex', paddingTop: '12vh', flexDirection: 'column' }}>      
         <div>
         <img src={user} style={{ width: '15vw' }}/> 
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5vh' }}>
         <Button 
            style={{ backgroundColor: '#77C689', borderRadius: '15px' }}            
          >         
          Profil
        </Button>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '7vh' }}>           
           <div> <img src={turtle} style={{ width: '15vw' }}/>  </div>
           <div> <img src={deadpool} style={{ width: '15vw' }}/>  </div>
           <div> <img src={thor} style={{ width: '15vw' }}/>  </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button 
            style={{ backgroundColor: '#77C689', borderRadius: '15px', marginTop: '7vh' }}            
        >         
            Choisissez votre moyen de transport 
        </Button>         
        </div>
       
       <div style={{ marginTop: '5vh' }}>

       </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px', width: '50%', textAlign: 'center', marginTop: '3vh' }}            
        >         
            A pied  
        </div> 
        <div 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px', width: '50%', textAlign: 'center', marginTop: '3vh' }}             
        >         
            Vélo 
        </div> 
        <div 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px', width: '50%', textAlign: 'center', marginTop: '3vh' }}             
        >         
            Voiture 
        </div> 
        <div 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px', width: '50%', textAlign: 'center', marginTop: '3vh' }}             
        >         
            Bus 
        </div> 
         
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