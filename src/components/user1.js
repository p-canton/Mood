import React, { Component } from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link} from 'react-router-dom';

import Philips from './images/Philips.png';
import PhilipsLogo from './images/PhilipsLogo.png'
import Create from './images/Create.png';
import Pdance from './images/Pdance.gif';
import Iframe from 'react-iframe'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [{name: '', Team: 50, You: 50},
              {name: 'Mon', Team: 40, You: 45},
              {name: 'Tus', Team: 90, You: 80},
              {name: 'Wed', Team: 50, You: 60},
              {name: 'Thu', Team: 70, You: 50},
              {name: 'Fri', Team: 60, You: 50},];

class User1 extends Component {
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
            <Link className="LinkStyle" to="/Mood.github.io/">
              <p className="ButtonStyle">Contact</p></Link>
            <Link className="LinkStyle" to="/Mood.github.io/">
              <p className="ButtonStyle">Survey</p></Link>
          </div>
          <div className="GridProjects">
            <div className="GPcombine GridTwo">
              <div className="GPLeft">
              <Link className="LinkStyle" to="/Mood.github.io/project">
                <p className="ButtonSelec"><b>Pablo Cantón</b></p>
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
            <div className="GPcombine GridTwoGraf">
              <div style={{padding:'1em'}}>
                <div className="ProjectBox">
                  <Link className="LinkStyle" ><img className="ProjectPic" src={Pdance}/>
                  </Link>
                </div>
              </div>
              <div className="Graf">
                <ResponsiveContainer>
                  <LineChart data={data} margin={{top: -10, right: 15, left: -10, bottom: -10,}}>
                    <Legend width={100} wrapperStyle={{ top: 10, right: 10, backgroundColor: 'none', border: 'none'}}/>
                    <Line type="monotone" dataKey="Team" stroke="#0B5ED8" />
                    <Line type="monotone" dataKey="You" stroke="#FF7E07" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0.1 0.1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer >
              </div>
              <div className="GPcombine GPLeft">
                <Link className="LinkStyle" >
                  <p className="IconStyle"><b>Survey History</b></p>
                </Link>
              </div>
              <div className="GPcombine GPLeft">
                  <div className="TestBox">
                  <p className="TextBox">
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
                <Link className="LinkStyle" >
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
              </div>
              <div className="GPcombine GridTwo">
                <div className="GPLeft">
                <Link className="LinkStyle" >
                  <p className="IconStyle"><b>Interactions</b></p>
                </Link>
                </div>
                <div className="GPLeft">
                <Link className="LinkStyle" >
                  <p className="IconStyle"><b>Conections</b></p>
                </Link>
                </div>
              </div>
              <div className="GPcombine GridTwo">
                <div className="GPLeft">
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-cubes" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Arduino</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-cubes" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Dashboard</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-user" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Jelte</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-user" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Niels</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-user" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Constance</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-calendar-o" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Meetings</p>
                  </div>
                </div>
                <div className="GPLeft">
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-bookmark" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>UX Designer</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-paint-brush" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Team DIA</p>
                  </div>
                  <div className="TestBox"><p className="TextBox">
                    <i class="fa fa-briefcase" aria-hidden="true" style={{paddingRight: '0.5em'}}></i>Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }
export default User1;
