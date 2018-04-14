import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: 'yellow',
}

let fakeServerData = {
  user: {
    name: 'Kuba',
    playlists: [
      {
        name: 'Boi Best',
        songs: [{name: 'Campfire', duration: 2150}, {name: 'Kryptowaluty',duration: 4340}, {name: 'Gummy', duration: 4200}, {name: 'REDMERCEDES', duration: 2490}]
      },
      {
        name: 'Discover Weekly',
        songs: [{name: 'Campfire', duration: 2150}, {name: 'Kryptowaluty',duration: 4340}, {name: 'Gummy', duration: 4200}, {name: 'REDMERCEDES', duration: 2490}]
      },
      {
        name: 'Poczekalnia',
        songs: [{name: 'Campfire', duration: 2150}, {name: 'Kryptowaluty',duration: 4340}, {name: 'Gummy', duration: 4200}, {name: 'REDMERCEDES', duration: 2490}]
      },
      {
        name: 'Canzoni Fresche',
        songs: [{name: 'Campfire', duration: 2150}, {name: 'Kryptowaluty',duration: 4340}, {name: 'Gummy', duration: 4200}, {name: 'REDMERCEDES', duration: 2490}]
      },
  ]
  }
}

class LiczbaPlaylist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlisty</h2>
      </div>
    );
  }
}

class Godziny extends Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
   let totalDuration = allSongs.reduce((sum, eachSong) => {
     return sum + eachSong.duration
   }, 0)
    
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} godzin</h2>
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
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(() =>{
    this.setState({serverData: fakeServerData})
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '50px'}}>
          {this.state.serverData.user.name}'s Playlists</h1>         
          <LiczbaPlaylist playlists={this.state.serverData.user.playlists}/>
          <Godziny playlists={this.state.serverData.user.playlists}/>      
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>     
        </div> : <h1 style={defaultStyle}>Loadnig...</h1>
        }
      </div>
    );
  }
}

export default App;
