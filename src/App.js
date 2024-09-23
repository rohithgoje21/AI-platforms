import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import platforms from "./Data";
import Card from "./Card";
import Footer from "./Footer";

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
      <Footer></Footer>
    </>
  );
};

export default App;
