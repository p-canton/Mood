import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends React.Component{
  componentDidMount() {
    this._div.scrollTop = 0
  }
  render() {
    return (
    <div ref={(ref) => this._div = ref}>
      <Main/>
    </div>

    );
  }
}

export default App;
