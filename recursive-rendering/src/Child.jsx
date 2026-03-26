import React from "react";
import GrandChild from "./GrandChild";
import { sleep } from "./utils";

export default function Child() {
  sleep(30);
  console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered");
  return (
    <div className="child">
      <p>Child Component</p>
      <GrandChild />
      <GrandChild />
    </div>
  );
}

//to VERSION7
// import React from "react";
// import GrandChild from "./GrandChild";

// export default function Child() {
//   console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered");
//   return (
//     <div className="child">
//       <p>Child Component</p>
//       <GrandChild />
//       <GrandChild />
//     </div>
//   );
// }
