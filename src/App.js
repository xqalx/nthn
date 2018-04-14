import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#008EDC'
let defaultStyle = {
  color: defaultTextColor
}

class Bitcoin extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Kryptowaluty</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={{defaultStyle}}>
        <img/>
        <input type='text'/>
        </div>       
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
        <img/>
        <h3>Top Songs</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let name = 'Kuba'
    let green = '#30FF30'
    let headerStyle = {color: green, 'font-size':'25px'}
    return (
      <div className="App">
        <h1>Title</h1>
        <Bitcoin/>
        <Bitcoin/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
