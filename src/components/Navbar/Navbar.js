import React from "react";
import "./Navbar.css";

const Navbar = ({score, topScore}) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <h2>Rocko's Clicky Game</h2>
    </div>
    <div>
      <h2>Click an image to begin!</h2>
    </div>
    <div>
      <h2>Score: {score} | Top Score: {topScore}</h2>
    </div>
  </nav>
);

export default Navbar;
