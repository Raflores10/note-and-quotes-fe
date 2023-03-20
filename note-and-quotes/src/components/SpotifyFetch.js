import axios from "axios"
import { token } from "../components/SpotifyToken"

const getAccessToken = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    return accessToken;
  };
  
  export const accessToken = getAccessToken();

const auth = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  export const getUser = () => axios.get('https://api.spotify.com/v1/me', { auth });