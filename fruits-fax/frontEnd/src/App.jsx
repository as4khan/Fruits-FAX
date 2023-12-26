import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./navbar_section/NavBar";
import Home from "./Home/Home";
import About from "./About/About";
import Get_started from "./Get Started/Get_started";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <div class="container-fluid">
        <About />
        <Get_started />
      </div>
    </>
  );
};

export default App;
