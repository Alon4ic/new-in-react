import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Toggle from "./components/Toggle/index";


export default function App() {
  return (
    <>
      <Star />
      <br />
      <Menu >
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      {/* <Toggle onToggle={()=> {console.log("Toggled")}}>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? "filled" : ""}`}></div>;
            }}
          </Toggle.Display>
          {/* <Toggle.On>
          </Toggle.On>
          <Toggle.Off>
          </Toggle.Off> */}
      {/* </Toggle.Button>
      </Toggle> */}
    </>
  );
}

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Menu from "./components/Menu/index"
// import Star from "./components/Star";

// export default function App() {

//   return (
//     <>
//       <Star onChange={() => {}} />
//       <br />
//       <Menu onOpen={() => console.log("We're working with the menu")}>
//         <Menu.Button>Menu</Menu.Button>
//         <Menu.Dropdown>
//           <Menu.Item>Home</Menu.Item>
//           <Menu.Item>About</Menu.Item>
//           <Menu.Item>Contact</Menu.Item>
//           <Menu.Item>Blog</Menu.Item>
//         </Menu.Dropdown>
//       </Menu>
//     </>
//   );
// }

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Menu from "./components/Menu/index.js";
// import Toggle from "./components/Toggle/index";
//  import { BsStar, BsStarFill } from "react-icons/bs";

// export default function App() {
//   const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
//   return (
//     <>
//       <Toggle>
//         <Toggle.Button>
//           <Toggle.On>
//             <BsStarFill className="star filled" />
//           </Toggle.On>
//           <Toggle.Off>
//             <BsStar className="star" />
//           </Toggle.Off>
//         </Toggle.Button>
//       </Toggle>

//       <br />
//       <hr />
//       <br />
//       <Menu>
//         <Menu.Button>Sports</Menu.Button>
//         <Menu.Dropdown>
//           {sports.map((sport) => (
//             <Menu.Item key={sport}>{sport}</Menu.Item>
//           ))}
//         </Menu.Dropdown>
//       </Menu>
//     </>
//   );
// }

// import React, { useState } from "react";
// import Header from "./components/Header";
// import Button from "./components/Button";

// const ThemeContext = React.createContext();
// export default function App() {
//   const [theme, setTheme] = useState("light")
//   function toggleTheme() {
//     setTheme(prev => prev === "light" ? "dark" : "light")
//   }
//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <div className={`container ${theme}-theme`}>
//         <Header />
//         <Button />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export { ThemeContext };

// import React from 'react'
// import Menu from './components/Menu/Menu'
// import MenuButton from './components/Menu/MenuButton';
// import MenuDropdown from './components/Menu/MenuDropdown';
// import MenuItem from './components/Menu/MenuItem';

// export default function App() {
//   const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
//   return (
//     <Menu>
//       <MenuButton>Sports</MenuButton>
//       <MenuDropdown>
//         {sports.map((sport) => (
//           <MenuItem key={sport}>
//             <a href="#">{sport}</a>
//           </MenuItem>
//         ))}
//       </MenuDropdown>
//     </Menu>
//   );
// }

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Avatar from "./components/Avatar";

// export default function App() {
//   return (
//     <>
//       <Avatar className="avatar" src="../src/img/avatar.jpg" alt="Alona Redco" />
//       <br />
//       <Avatar className="avatar-letters">BZ</Avatar>
//       <br />
//       <Avatar className="avatar-icon" />
//     </>
//   );
// }

// import Button from './components/Button'
// import Marquee from './components/Marquee'
// import { FaMoneyBill } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

//2//
// function App() {
//   return (
//     <main>
//       <Marquee>🧛‍♀️ Welcome to Horrorville 🧛‍♀️</Marquee>
//       {/* <Marquee text="🧛‍♀️ Welcome to Horrorville 🧛‍♀️" /> */}
//     </main>
//   );
// }

// export default App

// //1//
// function App() {
//   // const text = "Click Me"
//   function handleClick() {
//     console.log("Logging in...");
//   }
//   return (
//     <main>
//       <Button size="lg" variant='success' className='green' onClick={handleClick}>
//         <FcGoogle />
//         Log in with Google
//       </Button>
//     </main>
//   );
// }
// function App() {
//   // const text = "Click Me"

//   function handleClick() {
//     console.log("Logging in...");
//   }
//   return (
//     <main>
//       <Button variant style={{color: "green"}} onClick={handleClick}>
//         <FcGoogle />
//         Log in with Google
//       </Button>
//       {/* <Button text={text} /> */}
//       {/* <select>
//       <option>Thing 1</option>
//       <option>Thing 2</option>
//       <option>Thing 3</option>
//      </select> */}
//     </main>
//   );
// }

// export default App;
