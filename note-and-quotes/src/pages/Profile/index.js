
import Card from 'react-bootstrap/Card';
import { getUserProfile } from "../../components/SpotifyToken";
import React, {useEffect , useState} from "react";
import { accessToken } from "../../components/SpotifyToken"


const Profile = () => {

  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);


export default function Profile(props) {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [Id, setId] = useState('');
    const user2 = props.location?.state?.user;

    useEffect(() => {
      // Make a fetch request to your database to retrieve the user's username
      fetch(`http://localhost:3001/api/users/${Id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [userId]);

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
        <Card.Title>Hello {user2 && user2.username}</Card.Title>
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