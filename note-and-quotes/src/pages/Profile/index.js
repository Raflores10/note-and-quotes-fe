import Card from 'react-bootstrap/Card'
import React, {useState , useEffect} from "react"
import { getUser, accessToken } from '../../components/SpotifyFetch'
import { token } from "../../components/SpotifyToken"
import Cors from "cors"

// import queryString from "query-string"


export default function Profile () {

  const [token, setToken] = useState(null);
  const [spotifyProfile, setSpotifyProfile] = useState();

  // useEffect() => {
  //   setToken(accessToken);

    fetch('https://api.spotify.com/v1/me/player/recently-played', {
          headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(data => console.log(data))
        // .then(data => useState({
        //   user: {
        //     track: data.track
        //   },
        // }))
      
   
        




      
  


  

  

    
    
          // let parsed = queryString.parse(window.location.search);
          // let accessToken = parsed.access_token;
          // if (!accessToken)
          //   return;

          //   fetch('https://api.spotify.com/v1/me/player/recently-played', {
          //     headers: {'Authorization': 'Bearer ' + accessToken}
          //   }).then(response => response.json())
          //       .then(data => useState({
          //         user: {
          //           items: data.track.name
          //     },
          //   }))
            

          // fetch('https://api.spotify.com/v1/me', {
          //   headers: {'Authorization': 'Bearer ' + accessToken}
          // }).then(response => response.json())
          // .then(data => console.log(data))

        
        
          
    return (
      <div>
        <div className="infoCard">
      <Card style={{ width: '18rem', height:'25rem' }}>
      <Card.Body>
        <Card.Title>Username</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> spotify photo input?</Card.Subtitle>
        <Card.Text>
          Bio
        </Card.Text>
        <Card.Link href="#">spotify profile link</Card.Link>
        <Card.Link href="#">messsage?</Card.Link>
      </Card.Body>
    </Card>
      </div>
    </div>
    )
  }