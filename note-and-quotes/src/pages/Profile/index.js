import React from 'react'
import Card from 'react-bootstrap/Card'




export default function Profile() {
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
