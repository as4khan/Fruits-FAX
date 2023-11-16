import React from "react";
import "./NavBar.css"
import { useState } from "react"
import Logo from "../Images/logo1.png"
const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <img src={Logo} alt="Logo Image"/>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}>About</a>
          </li>
          <li>
            <a href="#get_started" onClick={() => setActiveNav('#get_started')} className= {activeNav === '#get_started' ? 'active' : ''}>Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
