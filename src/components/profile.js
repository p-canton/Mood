import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link} from 'react-router-dom';

import Philips from './images/Philips.png';
import PhilipsLogo from './images/PhilipsLogo.png'
import Create from './images/Create.png';
import Pdance from './images/Pdance.gif';


class Profile extends Component {
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
            <Link className="LinkStyle HidePC" to="/Mood.github.io/project">
              <p className="IconStyle"><i class="fa fa-bell" aria-hidden="true"></i></p>
            </Link>
          </div>
          <div className="PaddingBar HidePC" style={{textAlign:'center'}}>
            <Link className="LinkStyle" to="/Mood.github.io/project">
              <p className="IconStyle"><i class="fa fa-clock-o" aria-hidden="true"></i></p>
            </Link>
          </div>
          <div className="PaddingBar HidePC" style={{textAlign:'center'}}>
            <Link className="LinkStyle" to="/Mood.github.io/project">
              <p className="IconStyle"><i class="fa fa-users" aria-hidden="true"></i></p>
            </Link>
          </div>
        </div>
        <div className="GridMain">
          <div className="SettingsBar HidePhone">

          <Link className="LinkStyle" to="/Mood.github.io/project">
            <p className="ButtonStyle">Home</p></Link>
            <Link className="LinkStyle" to="/Mood.github.io/project">
              <p className="ButtonStyle">Profile</p></Link>
            <Link className="LinkStyle" to="/Mood.github.io/project">
              <p className="ButtonStyle">Notifications</p></Link>
            <Link className="LinkStyle" to="/Mood.github.io/project">
              <p className="ButtonStyle">History</p></Link>
            <Link className="LinkStyle" to="/Mood.github.io/project">
              <p className="ButtonStyle">Teammates</p></Link>
            <hr style={{width:'70%'}}/>
            <Link className="LinkStyle" to="/Mood.github.io/">
              <p className="ButtonStyle">Contact</p></Link>
            <Link className="LinkStyle" to="/Mood.github.io/">
              <p className="ButtonStyle">Survey</p></Link>
          </div>
          <div className="GridProjects">
            <div className="GPcombine GridTwo">
              <div className="GPLeft">
              <Link className="LinkStyle" to="/Mood.github.io/project">
                <p className="IconStyle"><b>Pablo Cantón</b></p>
              </Link>
              </div>
              <div className="GPRight">
                <Link className="LinkStyle HidePC" to="/Mood.github.io/project">
                  <p className="IconStyle"><i class="fa fa-plus" aria-hidden="true" style={{paddingRight:'0.5em'}}> </i> | </p>
                </Link>
                <Link className="LinkStyle" to="/Mood.github.io/project">
                  <p className="IconStyle"><i class="fa fa-th-large" aria-hidden="true"></i></p>
                </Link>
                <Link className="LinkStyle" to="/Mood.github.io/project">
                  <p className="IconStyle"><i class="fa fa-th-list" aria-hidden="true"></i></p>
                </Link>
              </div>
            </div>
            <div className="GPcombine GridTwoGraf">
              <div style={{padding:'1em'}}>
                <div className="ProjectBox">
                  <Link className="LinkStyle" to="/Mood.github.io/project"><img className="ProjectPic" src={Pdance}/>
                  </Link>
                </div>
              </div>
              <div className="GPLeft">
                <div className="TestBox" style={{width: '100%'}}> <p className="TextBox">
                  Pablo</p>
                </div>
                <div className="TestBox" style={{width: '100%'}}><p className="TextBox">
                  34567654</p>
                </div>
                <div className="TestBox" style={{width: '100%'}}><p className="TextBox">
                  pablo@philips.ph</p>
                </div>
                <div className="TestBox" style={{width: '100%', backgroundColor: 'white'}}><p className="TextBox">
                  <b>Change Password</b></p>
                </div>
              </div>
              <div className="GPcombine GPLeft">
                <Link className="LinkStyle" to="/Mood.github.io/project">
                  <p className="IconStyle"><b>View preference</b></p>
                </Link>
              </div>
              <div className="GPcombine GPLeft">
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-file-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Your Mood</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-file-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Team Survey</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-file-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Private</p>
                  </div>
              </div>
              <div className="GPcombine GPLeft">
                <Link className="LinkStyle" to="/Mood.github.io/project">
                  <p className="IconStyle"><b>Current Energy</b></p>
                </Link>
              </div>
              <div className="GPcombine GPLeft">
                  <div className="TestBox" style={{width:'80%'}}><p className="TextBox">
                    <i class="fa fa-battery-three-quarters" aria-hidden="true" style={{paddingRight: '0.5em'}}></i> 80%</p>
                  </div>
              </div>
              <div className="GPcombine GPLeft">
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Joy</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Trust</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Fear</p>
                  </div>
                  <div className="TestBox" style={{backgroundColor:'gray'}}><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Surprise</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Sad</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Disgust</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Anger</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-smile-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Anticipation</p>
                  </div>
              </div>
              <div className="GPcombine GPLeft">
                <Link className="LinkStyle" to="/Mood.github.io/project">
                  <p className="IconStyle"><b>User Label</b></p>
                </Link>
              </div>
              <div className="GPcombine GPLeft">
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-coffee" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Coffee</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-comments" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Talk</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-exclamation" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Help</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-building" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>At the office</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-plus" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>New Label</p>
                  </div>
              </div>
              <div className="GPcombine GPLeft">
                <Link className="LinkStyle" to="/Mood.github.io/project">
                  <p className="IconStyle"><b>Privacy</b></p>
                </Link>
              </div>
              <div className="GPcombine GPLeft">
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-user-secret" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Anonymous</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-users" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>All people</p>
                  </div>
                  <div className="TestBox" style={{backgroundColor:'gray'}}><p className="TextBox">
                    <i class="fa fa-paint-brush" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Team</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }
export default Profile;

//<div className="TestBox"><p className="TextBox">
//    <i class="fa fa-frown-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>kjhgfds</p>
//  </div>
//  <div className="TestBox"><p className="TextBox">
//    <i class="fa fa-meh-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>kjhgfds</p>
//  </div>
