import React from "react-dom"
import "../style.css";
import ReactLogo from "../images/React-c.png"

export default function Navbar () {
 return (
  <container className="nav-container">
  <nav>
   <img
    src={ReactLogo}
    alt="React Logo"
    className="nav-icon"
    />
   <h3 className="nav-logo-text">React Facts</h3>
   <h4 className="nav-title">React Project 1: Info Site</h4>
  </nav>
  </container>
 )
}