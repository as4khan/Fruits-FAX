import React from "react";
import "./App.css";

function NavBar() {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="logo">Logo</div>
        <ul class="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
