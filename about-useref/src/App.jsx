import React from "react";
import Decision from "./Decision";

function App() {
  return (
    <div>
      {/* <Decision sayName={function(bool) {console.log(bool)}} /> */}
      <Decision>
        {(goingOut) => {
          return (
          <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
        )}}
      </Decision>
    </div>
  );
}

export default App;

//1
// import React from "react";
// import ReactDOM from "react-dom/client";

// export default function App() {
//   const [text, setText] = React.useState("");
//   const [list, setList] = React.useState([]);
//   const inputRef = React.useRef(null)

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!text) {
//       return;
//     }
//     setList((prevList) => [...prevList, text]);
//     setText("");
//     inputRef.current.focus()
//   }

//   return (
//     <>
//       <h2>React Project Ideas</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={handleChange}
//           value={text}
//           placeholder="Idea"
//           ref={inputRef}
//         />
//         <button>Submit</button>
//       </form>

//       <ol>
//         {list.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ol>
//     </>
//   );
// }

// // import React from "react";
// // import ReactDOM from "react-dom/client";

// // export default function App() {
// //   const [on, setOn] = React.useState(false);
// //   const renderCount = React.useRef(0)

// //   function forceRender() {
// //     setOn((prevOn) => !prevOn);
// //   }
// //   function incrementRenderCount() {
// //     renderCount.current++;
// //   }

// //   React.useEffect(() => {
// //     renderCount.current++
// //   });

// //   return (
// //     <>
// //       <h3>Understanding refs</h3>
// //       <button onClick={forceRender}>Force re-render w/ state change</button>
// //       <button onClick={incrementRenderCount}>Increment Ref Count</button>
// //       <h4>Render count: {renderCount.current}</h4>
// //     </>
// //   );
// // }
