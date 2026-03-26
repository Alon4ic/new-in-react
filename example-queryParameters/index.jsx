import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  /**
   * Challenge: think how we might approach filtering the list of
   * characters down based on the typeFilter we grabbed from the
   * searchParams.
   *
   * Extra credit: try doing it yourself!
   */

  const filteredChars = typeFilter
    ? swCharacters.filter(
        (char) => char.type.toLowerCase() === typeFilter.toLowerCase(),
      )
    : swCharacters;

  const charEls = filteredChars.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  )); 
  //or
  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if(value === null) {
      sp.delete('type')
    } else {
      sp.seet(key, value)
    }
    // console.log(sp.toString())
    return `?${sp.toString()}`
  }

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if(value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    }) 
  }
  return (
    <main>
      <h2>Home</h2>
      <div>
        {/* <Link to="?type=jedi">Jedi</Link>
        <Link to="?type=sith">Sith</Link>
        <Link to=".">Clear</Link> */}
        {/* and */}
        {/* <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link> */}
        {/* or */}
        {/* <button onClick={() => setSearchParams("type=jedi")}>Jedi</button>
        <button onClick={() => setSearchParams("type=sith")}>Sith</button>
        <button onClick={() => setSearchParams("")}>Clear</button> */}
        <button onClick={() => setSearchParams("type=jedi")}>Jedi</button>
        <button onClick={() => setSearchParams("type=sith")}>Sith</button>
        <button onClick={() => setSearchParams("")}>Clear</button>
        {/* or */}
        <button onClick={() => handleFilterChange('type', 'jedi')}>Jedi</button>
        <button onClick={() => handleFilterChange('type', 'sith')}>Sith</button>
        <button onClick={() => handleFilterChange=('type', null)}>Clear</button>
      </div>
      {charEls}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
