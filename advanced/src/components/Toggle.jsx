// import React, { useState } from 'react'
// const ToggleContext = React.createContext();

// export default function Toggle({ children }) {
//   const [ on, setOn] = useState(false)

//   function toggle() {
//     setOn(prev => !prev)
//   }

//   return (
//     <ToggleContext.Provider value={{ on, toggle }}>
//       <div>
//         {children}
//       </div>
//     </ToggleContext.Provider>
//   );
// }
// export {ToggleContext}