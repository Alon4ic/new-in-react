import React from "react";
import { ThemeContext } from "../App";

export default function Button() {
  const  value = React.useContext(ThemeContext)
 
  
  return <button className={`${value.theme}-theme`} onClick={value.toggleTheme}>Switch Theme</button>;
}

// import React from "react";
// import classNames from "classnames";

// export default function Button({ children, variant, className, size, ...rest }) {
//   let sizeClass = size && `button-${size}`
//   let variantClass = variant ? `button-${variant}` : ""
//   const allClasses = classNames(sizeClass, className, variantClass);

//   return (
//     <button className={allClasses} {...rest}>
//       {children}
//     </button>
//   );
// }

// import React from "react";

// export default function Button({ children, className, size, ...rest }) {
//   function changeSize(num) {
//     if (num === "lg") {
//       return "button-large";
//     } else if (num === "sm") {
//       return "button-small";
//     }
//   }
//   return (
//     <button {...rest} className={`${changeSize(size)} ${className}`}>
//       {children}
//     </button>
//   );
// }

// export default function Button({children, variant, ...rest}) {
//     console.log(rest)
//     console.log(variant)
//   return (
//     <div>
//       <button>
//         {children}
//       </button>
//     </div>
//   );
// }
//изучение передачи пропсов через спред
// export default function Button(props) {
//   return (
//     <div>
//       <button {...props}
//         // onClick={props.onClick}
//         // onDoubleClick={props.onDoubleClick}
//         // style={props.style}
//         // className={props.className}
//         // onMouseEnter={props.onMouseEnter}
//         // onMouseLeave={props.onMouseLeave}
//       >
//         {props.children}
//       </button>
//     </div>
//   );
// }
