
import Card from 'react-bootstrap/Card'
import React from "react"


export default function Home() {
  return (
    <div>
        <div className="infoCard">
      <Card style={{ width: '18rem', height:'25rem' }}>
      <Card.Body>
        <Card.Title>Hello Username!</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> spotify photo input?</Card.Subtitle>
        <Card.Text>
                top artists?
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}
