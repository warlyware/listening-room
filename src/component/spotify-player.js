import React, { Component } from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';

import { LOGIN_WINDOW_OPTIONS, LOGIN_URL } from '../constants/spotify';

const spotify = new SpotifyWebApi();

export default class SpotifyPlayer extends Component {
  openSpotifyLogin(url) {
    window.open(url,
      'Spotify',
      LOGIN_WINDOW_OPTIONS
     );
  }

  handleLogin = () => {
    this.openSpotifyLogin(LOGIN_URL);
  }

  render() {
    return(
      <div>
        <button onClick={this.handleLogin}>
          Login
        </button>
      </div>
    );
  }
}
