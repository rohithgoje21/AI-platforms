import React from 'react';
import Navbar from 'src/Navbar'
import 'src/App.css';
import platforms from 'src/Data';
import Card from 'src/Card';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="app">
        <div className="card-container">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              title={platform.title}
              description={platform.description}
              image={platform.image}
              link={platform.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
