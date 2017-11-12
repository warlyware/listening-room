import React, { Component } from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';

import { SpotifyService } from '../services/spotify';

const spotify = new SpotifyWebApi();
const spotifyService = new SpotifyService();

export default class SpotifyPlayer extends Component {
  componentDidMount() {

  }

  openSpotifyLogin() {
    spotifyService.login((accessToken) => {
      console.log(accessToken);
    });
        // getUserData(accessToken)
        //     .then(function(response) {
        //         loginButton.style.display = 'none';
        //         resultsPlaceholder.innerHTML = template(response);
        //     });
        // }
  }

  handleLogin = async () => {
    const loggedIn = await this.openSpotifyLogin();
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
