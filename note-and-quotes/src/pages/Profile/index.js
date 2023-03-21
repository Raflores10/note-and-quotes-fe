import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Login from '../Login';
import Register from '../Register';




export default function Profile(props) {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [Id, setId] = useState('');
    const user2 = props.location?.state?.user;

    useEffect(() => {
      // Make a fetch request to your database to retrieve the user's username
      fetch(`https://kjr-notes-and-quotes.herokuapp.com//api/users/${Id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [userId]);
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
