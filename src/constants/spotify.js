import CLIENT_ID from '../client-id';

const width = 450;
const height = 730;
const left = (window.innerWidth / 2) - (width / 2);
const top = (window.innerHeight / 2) - (height / 2);

export const LOGIN_WINDOW_OPTIONS = 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,' +
  `width=${width}, height=${height}, top=${top}, left=${left}`;

const REDIRECT_URI = 'http://localhost:3000/';
const scopes = [
  'user-read-email',
];

export const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;
