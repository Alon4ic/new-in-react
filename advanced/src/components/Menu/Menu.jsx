import React from "react";
import useToggle from "../../hooks/useToggle";

const MenuContext = React.createContext();
export default function Menu({ children, onOpen = () => {} }) {
  const [open, toggleOpen] = useToggle({
    // initialValue: true,
    onToggle: onOpen,
  });

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };

// import React from "react";
// const MenuContext = React.createContext()

// export default function Menu({ children }) {
//   const [open, setOpen] = React.useState(false);
//   const menuId = React.useId()

//   function toggle() {
//     setOpen((prevOpen) => !prevOpen);
//   }
//   return (
//     <MenuContext.Provider value={{open, toggle, menuId}}>
//       <div className="menu" role="menu">
//         {children}
//       </div>
//     </MenuContext.Provider>
//   );
// }
// export { MenuContext };
