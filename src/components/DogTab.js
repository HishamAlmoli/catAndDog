import React from 'react';
import { Button, Card } from 'react-bootstrap';
import dogImage from '../assets/dog.jpg';

const DogTab = ({ deleteDogPicture, deleteDogAndGoToMain }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={dogImage} />
      <Card.Body>
        <Button onClick={deleteDogPicture}>Delete Dog Picture</Button>
        <Button onClick={deleteDogAndGoToMain}>Delete Dog and Go to Main</Button>
      </Card.Body>
    </Card>
  );
};

export default DogTab;
