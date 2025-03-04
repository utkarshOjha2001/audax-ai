import React from 'react';
import wallImage from './assets/image.png';
import ConvAi from './components/convAi';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="image-container">
      <img className='imgs' src={wallImage} />
      <ConvAi />
      </div>
    </div>
  );
}

export default App;
