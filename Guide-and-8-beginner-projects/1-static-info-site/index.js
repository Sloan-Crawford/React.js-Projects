import React from "react"
import ReactDOM from "react-dom"

// syntax: React.DOM.render(what, where)
ReactDOM.render(<h1>hey chums</h1>, document.getElementById("root"));
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
  <h1>I'm learning React!</h1>
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
 <nav>
  <h1>SloanBones React Wizard</h1>
  <ul>
   <li>Pricing</li>
   <li>About</li>
   <li>Contact</li>
  </ul>
 </nav>
);

ReactDOM.render(navbar, document.getElementById('nav'));