import Card from 'react-bootstrap/Card';
import { getUserProfile } from "../../components/SpotifyToken";
import React, {useEffect , useState} from "react";
import { accessToken } from "../../components/SpotifyToken"

const Profile = () => {

  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getUserProfile();
        setProfile(data);
      } catch(e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

       
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

export default Profile