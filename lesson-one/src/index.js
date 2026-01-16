//==========TASK4=================
import { createRoot } from "react-dom/client";
import Header from "./Header";
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Page />
    <Footer />
  </div>
);



function Page() {
  return (
    <main>
      <h3>I need Ract!</h3>
      <ol>
        <li>I don't need to create the same elements over and over again.</li>
        <li>
          With React, I can create even complex applications very quickly.
        </li>
        <li>
          I want to become part of the React community and attend a React
          conference as a specialist.
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (<footer>
    <p>&copy; 2026 Olena Redko development.</p>
    <p>All rights reserved.</p>
    </footer>
  )
}



//==========TASK3=================
// import { createRoot } from "react-dom/client";
// import logo from './logo.svg'

// const root = createRoot(document.getElementById('root'))

// root.render(
//   <div>
//     <div>
//       <h1>We're studieng React</h1>
//       <img src={logo} alt="logo" />
//     </div>

//   </div>
// )
// console.log(<h1>Hello world!</h1>)
// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));

// root.render(
//   <h1>We're studing React!</h1>
// )

// //==========TASK2=================

// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));

// root.render(
//   <h1>We're studing React!</h1>
// )

// // Teacher's decission
// const h1 = document.createElement("h1")
// h1.textContent = "This is imperative coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)

//My decission
// import { createRoot } from "react-dom/client"
//  const root = createRoot(document.getElementById("root"))

//  const h1 = document.createElement('h1')
//  h1.classList.add('header')
// h1.innerText = 'I enjoy use React'

// root.appendChild(h1)
// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// function MyAwesomeNavbar() {
//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">MyAwesomeNavbar</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarsExample03">
//                     <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Link</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
//                             <ul className="dropdown-menu">
//                                 <li><a className="dropdown-item" href="#">Action</a></li>
//                                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                     <form role="search">
//                         <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// function MainContent() {
//   return (
//     <section>
//       <h1><span className="span">React </span>is great</h1>
//     </section>

//   )
// }

// root.render(
//     <div>
//         <MyAwesomeNavbar />
//         <MainContent />
//     </div>
// )

// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// const reactElement = <h1>Hello from JSX!</h1>

// console.log(reactElement)

// root.render(
//     reactElement
// )

// import { createElement } from "react"
// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// const reactElement = createElement("h1", null, "Hello from createElement!")

// console.log(reactElement)

// root.render(
//     reactElement
// )

// import { createElement } from "react"
// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// root.render(
//     createElement("h1", null, "Hello from createElement!")
// )

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import reportWebVitals from './reportWebVitals.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import { createRoot } from "react-dom/client"

// createRoot(document.getElementById("root")).render(
//     <ul>
//         <li>Super popular JS library</li>
//         <li>Will help me be even more employable</li>
//         <li>React has a pretty cool logo</li>
//     </ul>
// )
