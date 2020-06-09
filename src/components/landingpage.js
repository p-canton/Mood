import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link} from 'react-router-dom';

import Philips from './images/Philips.png';
import PhilipsLogo from './images/PhilipsLogo.png'
import Create from './images/Create.png';

class LandingPage extends Component {
  render() {

    return (
      <div className="MainFormat">
        <div className="GridBar HidePC">
          <div className="PaddingBar" style={{textAlign:'center'}}>
            <Link className="LinkStyle HidePC" to="/Mood.github.io/">
              <p className="IconStyle"><i class="fa fa-home" aria-hidden="true"></i></p>
            </Link>
          </div>
          <div className="PaddingBar" style={{textAlign:'center'}}>
            <Link className="LinkStyle HidePC" to="/Mood.github.io/profile">
              <p className="IconStyle"><i class="fa fa-user" aria-hidden="true"></i></p>
            </Link>
          </div>
          <div className="PaddingBar" style={{textAlign:'center'}}>
            <Link className="LinkStyle HidePC" >
              <p className="IconStyle"><i class="fa fa-bell" aria-hidden="true"></i></p>
            </Link>
          </div>
          <div className="PaddingBar HidePC" style={{textAlign:'center'}}>
            <Link className="LinkStyle" >
              <p className="IconStyle"><i class="fa fa-clock-o" aria-hidden="true"></i></p>
            </Link>
          </div>
          <div className="PaddingBar HidePC" style={{textAlign:'center'}}>
            <Link className="LinkStyle" >
              <p className="IconStyle"><i class="fa fa-users" aria-hidden="true"></i></p>
            </Link>
          </div>
        </div>
        <div className="GridMain">
          <div className="SettingsBar HidePhone">

            <p className="ButtonSelec">Home</p>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">Profile</p></Link>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">Notifications</p></Link>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">History</p></Link>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">Teammates</p></Link>
          </div>
          <div className="GridProjects">
            <div className="GPcombine GridTwo">
              <div className="GPLeft">
              <Link className="LinkStyle" >
                <p className="IconStyle"><b>Filters</b></p>
              </Link>
              </div>
              <div className="GPRight">
                <Link className="LinkStyle HidePC" >
                  <p className="IconStyle"><i class="fa fa-plus" aria-hidden="true" style={{paddingRight:'0.5em'}}> </i> | </p>
                </Link>
                <Link className="LinkStyle" >
                  <p className="IconStyle"><i class="fa fa-th-large" aria-hidden="true"></i></p>
                </Link>
                <Link className="LinkStyle" >
                  <p className="IconStyle"><i class="fa fa-th-list" aria-hidden="true"></i></p>
                </Link>
              </div>
            </div>
            <div style={{padding:'1em'}}>
              <div className="ProjectBox">
                <Link className="LinkStyle" to="/Mood.github.io/project"><img className="ProjectPic" src={Philips}/>
                  <p className="ButtonSelec">Profile</p>
                </Link>
              </div>
            </div>

            <div style={{padding:'1em'}}>
              <div className="ProjectBox">
                <Link className="LinkStyle" ><img className="ProjectPic" src={Create}/>
                  <p className="ButtonSelec">Create</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }
export default LandingPage;

//            <div className="HidePhone">
//              <img className="ButtonSelec" src={PhilipsLogo} style={{width: '10%'}}/>
//            </div>
