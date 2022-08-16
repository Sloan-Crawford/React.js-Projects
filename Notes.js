// ================ React.js complete notes ===================

// React is an open source JavaScript library used for building user interfaces. 
// It is currently maintained by Facebook, Instagram and a large community of developers. 
// also has a sister library (React Native): provides architecture to native iOS & Android applications.

// setting up (easy way):
// first, get React and Babel cdn script tags (React for development to allow for debugging, babel.min).
// JSX preprocessor - adding type="text/babel" to the index.js script. NOT SUITABLE FOR PRODUCTION.

// *********** setting up (BETTER way) ************
// use a good package manager (npm) and use Node.js (a good environment for developing server-side apps)
// Create React App. In terminal navigate to folder you want to create a new react project folder:
// npx create-react-app name-of-folder
// cd name-of-folder
// npm start

// start using react right away with:
// ReactDOM (global object)
// render() (method)
// syntax: React.DOM.render(what html, where)

// Why use React?
// 1. It allows us to write COMPOSABLE code, which is more maintainable and flexible.
// 2. It is DECLARATIVE - give general instructions (as opposed to specific, Imperative like in Vanilla JS)
// (we rely on React to figure out how to turn what we have declaratively written into JS)
// 

// ----------- JSX ------------
// JSX (javascript xml) = a flavour of js that looks a lot like html.
// what React is actually creating with JSX are js objects that describe the element to put on the page.
// JSX is like a function that returns us objects that react interprets to create elements.
// with JSX we need to make sure we are returning a single parent element.

// after setting up a new create-react-app and running npm start:
// the folder will load with subfolders node_modules, public, and src. Delete all files in src.
// note: index.html doesn't need to be created, it is already in the public folder.

// Custom components:
// a function that returns react elements (JSX objects) is considered a component (UI).
// necessary conventions to make functions work in React:
// 1. use PascalCase not camelCase
// 2. call functions by wrapping with angle brackets < /> instead of using parentheses ()

