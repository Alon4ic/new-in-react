import React from "react";
import { ThemeContext } from "../App";

export default function Header() {
  const value = React.useContext(ThemeContext)

  return (
    <header className={`${value.theme}-theme`}>
      {/* <h1>{value} Theme</h1>
      <h1>{value[0].toUpperCase() + value.slice(1)} Theme</h1> */}
      <h1>{value.theme === "light" ? "Light" : "Dark"} Theme</h1>
    </header>
  );
}
