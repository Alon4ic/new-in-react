import React from "react";
import MenuItem from "./MenuItem"
import { MenuContext } from "./Menu";

export default function MenuDropdown({children}) {
  const {open} = React.useContext(MenuContext)
  return open ?
     ( <div className="menu-dropdown">
        {children}
      </div> ) : null
}

// import React from "react";
// import { MenuContext } from "./Menu";

// export default function MenuDropdown({ children }) {
//   const { open, menuId } = React.useContext(MenuContext)

//   return open ? (
//    <div className="menu-dropdown" aria-hidden={!open} id={menuId}>{children}</div>
//   ) : null
// }

// export default function MenuDropdown({ children, open, toggle }) {
//   if (open) {
//     return <div className="menu-dropdown">{React.Children.map(children, (child) => {
//             return React.cloneElement(child, {
//               open,
//               toggle,
//             });
//           })}</div>;
//   } else {
//     return null
//   }
// }
