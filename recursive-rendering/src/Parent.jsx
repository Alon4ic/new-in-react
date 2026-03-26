import React from "react";
import Child from "./Child";
import { sleep } from "./utils";

export default function Parent() {
  sleep(30);
  console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered");
  return (
    <div className="parent">
      <p>Parent Component</p>
      <Child />
      <Child />
    </div>
  );
}

//to VERSION7
// import React from "react";
// import Child from "./Child";

// export default function Parent() {
//   console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered");
//   return (
//     <div className="parent">
//       <p>Parent Component</p>
//       <Child />
//       <Child />
//     </div>
//   );
// }
