import React from 'react';
import { Button, Card } from 'react-bootstrap';
import catImage from '../assets/cat.jpg';

const CatTab = ({ deleteCatPicture, deleteCatAndGoToMain }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={catImage} />
      <Card.Body>
        <Button onClick={deleteCatPicture}>Delete Cat Picture</Button>
        <Button onClick={deleteCatAndGoToMain}>Delete Cat and Go to Main</Button>
      </Card.Body>
    </Card>
  );
};

export default CatTab;
