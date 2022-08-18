// More about importing in project 2. This only done when scripts aren't imported in index.html
// import React from "react"
// import ReactDOM from "react-dom"

// This is how to import components from separate files:
// import Footer from "./Footer"

// syntax: React.DOM.render(what, where)
ReactDOM.render(<h1>React Basics</h1>, document.getElementById("root"));
ReactDOM.render(
<ul>
 <li>list item 1</li>
 <li>list item 2</li>
</ul>, 
document.getElementById("list"));

// doing something similar to above but in vanilla JS (more clunky, imperatively done):
const header = document.createElement('h1');
header.textContent = "header from vanilla JS";
header.classList.add("header1");
const root = document.getElementById('root');
root.appendChild(header);

// Creating an element using a function:
function MainContent() {
 return (
  <div className = "mainContent">
   <img src="./React-c.png" width = "80px" height = "80px"/>
   <h1>It's so much easier with React:</h1>
  </div>
 )
}

// Rendering that element:
ReactDOM.render(
 <div>
  <MainContent />
 </div>,
 document.getElementById("main"));


// creating a navbar in JSX:
const navbar = (
 <nav className ="nav">
  <h1>SloanBones React Wizard</h1>
  <ul className = "navItems">
   <li>is gonna crush it</li>
   <li>is fun</li>
   <li>will work for burritos</li>
  </ul>
 </nav>
);

ReactDOM.render(navbar, document.getElementById('nav'));


// Custom components:
// a function that returns react elements (JSX objects) is considered a component (UI).
// necessary conventions to make functions work in React:
// 1. use PascalCase not camel_case
// 2. call functions by wrapping with angle brackets < /> instead of using parentheses ()

function Challenge() {
 return (
  <ol> Reasons Why React is great:
   <li>It allows us to write COMPOSABLE code, which is more maintainable and flexible.</li>
   <li>It is DECLARATIVE - give general instructions as opposed to specific, Imperative like in Vanilla JS -we rely on React to figure out how to turn what we have declaratively written into JS</li>
  </ol>
 )
};

ReactDOM.render(
<div> 
 <Challenge /> 
</div>, 
document.getElementById('challenge'));

// Returning components within a component:
function H3() {
 return (
  <h3> a few final things to practice </h3>
 )
}

function Footer() { // see how this could be imported from a separate file in Footer.js
 return (
   <footer>
    <nav>
     <h1>thanks for stopping by</h1>
    </nav>
    <footer>&copy; 2022 Sloan Crawford. All rights reserved</footer>
   </footer>
 )
};

function Something() {
 return (
  <div>
  <H3 />
  <Footer />
  </div>
 )
}

ReactDOM.render(
 <div>
  <Something />
 </div>,
 document.getElementById('place')
)