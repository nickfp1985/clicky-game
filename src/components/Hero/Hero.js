import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="hero">
    {props.children}
  </div>
);

export default Hero;
