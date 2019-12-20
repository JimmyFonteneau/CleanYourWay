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
      mobilityId: null       
    };
    //this.updateOpenIsRendered = this.updateOpenIsRendered.bind(this);
   }

  //  updateOpenIsRendered() {
  //   openMapIsRendered = true;

  //  }

  onClickMobility(e) {
    this.setState({ mobilityId: e.target.id, openMap: true });
  }

  render () {
    const { openMap, mobilityId } = this.state;
    
    return (   
      <div>
        {openMap ? <MapOverview id={mobilityId}/> : 
         <div className="Account" style={{ display: 'flex', paddingTop: '12vh', flexDirection: 'column' }}>      
         <div style={{ display: 'flex', alignItems: 'flex-end' }}>
         <img src={user} style={{ width: '15vw', paddingLeft: '9vw' }}/> 
         <p style={{ paddingLeft: '5vw' }}>Le super utilisateur</p>
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
            id='Walk'
            onClick={(e) => this.onClickMobility(e)}
        >         
            A pied  
        </div> 
        <div 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px', width: '50%', textAlign: 'center', marginTop: '3vh' }}             
            id='Bicycle'
            onClick={(e) => this.onClickMobility(e)}
        >         
            Vélo 
        </div> 
        <div 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px', width: '50%', textAlign: 'center', marginTop: '3vh' }}             
            id='Car'
            onClick={(e) => this.onClickMobility(e)}
        >         
            Voiture 
        </div> 
        <div 
            style={{ border: '1px solid #4CAF50', backgroundColor: 'white', borderRadius: '15px', width: '50%', textAlign: 'center', marginTop: '3vh' }}             
            id='Bus'
            onClick={(e) => this.onClickMobility(e)}
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