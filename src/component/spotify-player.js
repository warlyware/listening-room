import React, { Component } from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';
import CLIENT_ID from '../client-id';

const spotify = new SpotifyWebApi();

export default class SpotifyPlayer extends Component {

  openSpotifyLogin(url) {
    var width = 450,
    height = 730,
    left = (window.innerWidth / 2) - (width / 2),
    top = (window.innerHeight / 2) - (height / 2);
    window.open(url,
      'Spotify',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
     );
  }

  async componentDidMount() {
    const REDIRECT_URI = 'http://localhost:3000/';
    const scopes = [
      'user-read-email',
    ];

    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;

    // this.openSpotifyLogin(url);
  }

  render() {
    return(
      <div>player goes here</div>
    );
  }
}
