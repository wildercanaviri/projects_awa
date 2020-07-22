import React from 'react';
import './Card.css';

import { Card, Button } from 'react-bootstrap';

const Cards = ({props}) =>{
  
    return(
        <Card bg="primary" text="white" style={{ width: '18rem', margin:'0.5em' }}>        
        <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="light">Go</Button>
        </Card.Body>
      </Card>
    );
}
export default Cards;