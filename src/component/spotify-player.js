import React, { Component } from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

export default class SpotifyPlayer extends Component {

  componentDidMount() {
    spotifyApi.setAccessToken('498db57ea6ac4a65b61f8bfc2fc392c3');
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    });
  }

  render() {
    return(
      <div>player goes here</div>
    );
  }
}
