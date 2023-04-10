import React, { useState } from 'react';
import MainTab from './components/MainTab';
import CatTab from './components/CatTab';
import DogTab from './components/DogTab';
import './App.css';
import catImage from './assets/cat.jpg';
import dogImage from './assets/dog.jpg';


const App = () => {
  const [currentTab, setCurrentTab] = useState('main');
  const [catVisible, setCatVisible] = useState(true);
  const [dogVisible, setDogVisible] = useState(true);
  const [catName, setCatName] = useState('Cat Name');
  const [dogName, setDogName] = useState('Dog Name');


  const navigateToCatTab = () => {
    setCurrentTab('cat');
  };

  const navigateToDogTab = () => {
    setCurrentTab('dog');
  };

  const deleteCatPicture = () => {
    if (currentTab === 'cat') setCatVisible(false);
  };

  const deleteDogPicture = () => {
    if (currentTab === 'dog') setDogVisible(false);
  };

  const deleteCatAndGoToMain = () => {
    setCatVisible(false);
    setCatName('');
    setCurrentTab('main');
  };

  const deleteDogAndGoToMain = () => {
    if (window.confirm('Are you sure you want to delete the dog picture and name?')) {
      setDogVisible(false);
      setDogName('');
      setCurrentTab('main');
    }
  };

  const restartApp = () => {
    setCatVisible(true);
    setDogVisible(true);
    setCatName('Cat Name');
    setDogName('Dog Name');
  };

  return (
    <div className="App">
      {currentTab === 'main' && (
        <MainTab
          navigateToCatTab={navigateToCatTab}
          navigateToDogTab={navigateToDogTab}
          catName={catVisible ? catName : ''}
          dogName={dogVisible ? dogName : ''}
          catImage={catVisible ? catImage : null}
          dogImage={dogVisible ? dogImage : null}
        />
      )}
      {currentTab === 'cat' && catVisible && (
        <CatTab
          deleteCatPicture={deleteCatPicture}
          deleteCatAndGoToMain={deleteCatAndGoToMain}
        />
      )}
      {currentTab === 'dog' && dogVisible && (
        <DogTab
          deleteDogPicture={deleteDogPicture}
          deleteDogAndGoToMain={deleteDogAndGoToMain}
          restartApp={restartApp} // Pass the restartApp function as a prop
        />
      )}
    </div>
  );
};

export default App;
