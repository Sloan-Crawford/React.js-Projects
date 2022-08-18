import React from "react-dom"
import "../style.css";

export default function Main() {
 return (
  <div className="main-container">
   <h1 className="title"> React: Fun Facts</h1>
   <ul className="list">
    <li>React is an open source JavaScript library used for building user interfaces.</li>
    <li>It is currently maintained by Facebook, Instagram and a large community of developers.</li>
    <li>It also has a sister library (React Native) which provides architecture to native iOS & Android applications.</li>
    <li>It allows us to write COMPOSABLE code, which is more maintainable and flexible.</li>
    <li>It is DECLARATIVE; It gives general instructions (as opposed to specific, IMPERATIVE instructions like in Vanilla JS).</li>
   </ul>
  </div>
 )
}