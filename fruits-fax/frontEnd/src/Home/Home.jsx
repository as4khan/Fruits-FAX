import React from "react";
import "./home.css";
import BACKGROUND from "../Images/background.png";

const Home = () => {
  const bc = {
    backgroundImage: `url(${BACKGROUND})`,
  };

  return (
    <section id="home" style={bc}>
      <div className="header">
        <h5>Welcome to...</h5>
        <h1>FRUIT-FAX</h1>
      </div>
    </section>
  );
};

export default Home;
