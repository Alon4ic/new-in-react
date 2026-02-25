import React from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }) {
  const { toggleOpen } = React.useContext(MenuContext)
  return (
      <Button onClick={toggleOpen} aria-haspopup="true">{children}</Button>
  );
}

// import React from "react";
// import Button from "../Button/Button";
// import { MenuContext } from "./Menu";

// export default function MenuButton({ children }) {
//   const { toggle, open, menuId } = React.useContext(MenuContext);

//   return (
//     <Button
//       onClick={toggle}
//       aria-expanded={open}
//       aria-haspopup="true"
//       aria-controls={menuId}
//     >
//       {children}
//     </Button>
//   );
// }
