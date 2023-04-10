import React from 'react';
import { Button, Card } from 'react-bootstrap';
import catImage from '../assets/cat.jpg';
import dogImage from '../assets/dog.jpg';

const MainTab = ({ navigateToCatTab, navigateToDogTab, catName, dogName, catImage, dogImage, restartApp }) => {
    return (
    <div className="card-container">
      <Card className="card" style={{ width: '18rem', marginRight: '1rem' }}>
        {catImage && <Card.Img src={catImage} />}
        <Card.Body>
          <Card.Title>{catName}</Card.Title>
          <Button onClick={navigateToCatTab}>Go to Cat Tab</Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: '18rem', marginLeft: '1rem' }}>
        {dogImage && <Card.Img src={dogImage} />}
        <Card.Body>
          <Card.Title>{dogName}</Card.Title>
          <Button onClick={navigateToDogTab}>Go to Dog Tab</Button>
        </Card.Body>
      </Card>
      {/* Add Restart Button */}
      <Button onClick={restartApp} style={{ marginTop: '1rem' }}>Restart App</Button>
    </div>
  );
};

export default MainTab;