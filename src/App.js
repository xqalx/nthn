import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#008EDC',
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
    return (
      <div className="App">
        <h1 style={{...defaultStyle, 'font-size': '50px'}}>Title</h1>
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
