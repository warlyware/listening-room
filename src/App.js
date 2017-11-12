import React, { Component } from 'react';
import './App.css';
import SpotifyPlayer from './component/spotify-player.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpotifyPlayer />
      </div>
    );
  }
}

export default App;
