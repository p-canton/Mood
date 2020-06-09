import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link} from 'react-router-dom';

import Philips from './images/Philips.png';
import PhilipsLogo from './images/PhilipsLogo.png'
import Create from './images/Create.png';
import Pdance from './images/Pdance.gif';
import Pgreat from './images/Pgreat.gif';
import Ptired from './images/Ptired.gif';
import Pangry from './images/Pangry.gif';
import Pquestion from './images/Pquestion.gif';

class Project extends Component {
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
          <div className="HidePhone SettingsBar">
            <Link className="LinkStyle" to="/Mood.github.io/">
              <p className="ButtonStyle">Home</p></Link>
            <Link className="LinkStyle" to="/Mood.github.io/profile">
              <p className="ButtonStyle">Profile</p></Link>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">Notifications</p></Link>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">History</p></Link>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">Teammates</p></Link>
            <hr style={{width:'70%'}}/>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">Team projects</p></Link>
            <Link className="LinkStyle" >
              <p className="ButtonStyle">Team mood</p></Link>
            <div className="TestBox">
              <Link className="LinkStyle" to="/Mood.github.io/survey"><p className="TextBox">
                <i class="fa fa-file-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Your Mood</p></Link>
            </div>
            <div className="TestBox"><p className="TextBox">
              <i class="fa fa-file-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Team Survey</p>
            </div>
            <div className="TestBox"><p className="TextBox">
              <i class="fa fa-file-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Private</p>
            </div>
          </div>
          <div className="GridProjects">
            <div className="GPcombine GridTwo">
              <div className="GPLeft">
              <Link className="LinkStyle" >
                <p className="ButtonSelec"><b>Team Happy</b></p>
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
            </div>
            <div style={{padding:'1em'}}>
              <div className="ProjectBox OverlayBox">
                <Link className="LinkStyle" to="/Mood.github.io/user1"><img className="ProjectPic" src={Pdance}/>
                  <p className="ButtonSelec">Pablo</p>
                  <div class="overlay">
                    <p><b>"I am Happy"</b></p>
                    <div class="GPLeft">
                      <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                        <i class="fa fa-coffee" aria-hidden="true"></i></p>
                      </div>
                      <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                        <i class="fa fa-comments" aria-hidden="true"></i></p>
                      </div>
                      <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                         <i class="fa fa-exclamation" aria-hidden="true"></i></p>
                      </div>
                      <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                        <i class="fa fa-building" aria-hidden="true"></i></p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div style={{padding:'1em'}}>
            <div className="ProjectBox OverlayBox">
              <Link className="LinkStyle" to="/Mood.github.io/user1"><img className="ProjectPic" src={Pquestion}/>
                <p className="ButtonSelec">Pablo</p>
                <div class="overlay">
                  <p><b>"What ??"</b></p>
                  <div class="GPLeft">
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-coffee" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-comments" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                       <i class="fa fa-exclamation" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-building" aria-hidden="true"></i></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            </div>
            <div style={{padding:'1em'}}>
            <div className="ProjectBox OverlayBox">
              <Link className="LinkStyle" to="/Mood.github.io/user1"><img className="ProjectPic" src={Pgreat}/>
                <p className="ButtonSelec">Pablo</p>
                <div class="overlay">
                  <p><b>"Feel good"</b></p>
                  <div class="GPLeft">
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-coffee" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-comments" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                       <i class="fa fa-exclamation" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-building" aria-hidden="true"></i></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            </div>
            <div style={{padding:'1em'}}>
            <div className="ProjectBox OverlayBox">
              <Link className="LinkStyle" to="/Mood.github.io/user1"><img className="ProjectPic" src={Ptired}/>
                <p className="ButtonSelec">Pablo</p>
                <div class="overlay">
                  <p><b>"1 min more"</b></p>
                  <div class="GPLeft">
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-coffee" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-comments" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                       <i class="fa fa-exclamation" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-building" aria-hidden="true"></i></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            </div>

            <div style={{padding:'1em'}}>
            <div className="ProjectBox OverlayBox">
              <Link className="LinkStyle" to="/Mood.github.io/user1"><img className="ProjectPic" src={Pangry}/>
                <p className="ButtonSelec">Pablo</p>
                <div class="overlay">
                  <p><b>"Noooooooo"</b></p>
                  <div class="GPLeft">
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-coffee" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-comments" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                       <i class="fa fa-exclamation" aria-hidden="true"></i></p>
                    </div>
                    <div className="TestBox" style={{width: '3.5em'}}><p className="TextBox">
                      <i class="fa fa-building" aria-hidden="true"></i></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
  }
export default Project;

//            <div className="HidePhone">
//              <img className="ButtonSelec" src={PhilipsLogo} style={{width: '10%'}}/>
//            </div>
