import React from 'react'
import Container from'react-bootstrap/Container'

const AUTH_URL="https://accounts.spotify.com/authorize?client_id=bda5314a701d43bcb014053b75846ddb&response_type=code&redirect_uri=http://localhost:3000/login&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-read-currently-playing%20user-top-read%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played"

export default function SpotifyLogin() {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login With Spotify
        </a>
      </Container>
    )
  }




