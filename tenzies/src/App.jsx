import { useEffect, useRef, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
function generateAllNewDice() {
  return new Array(10).fill(0).map(() => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid(),
  }));
}
export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const btnRef = useRef(null);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));
  useEffect(() => {
    if (gameWon && btnRef.current) {
      btnRef.current.focus();
    }
  }, [gameWon]);

  return (
    <main className="block">
      {gameWon && (
        <Confetti
          width={window.innerWidth || 300}
          height={window.innerHeight || 200}
        />
      )}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instruction">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button
        type="button"
        ref={btnRef}
        className="roll-btn"
        onClick={rollDice}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
//or

// import React, {useState} from 'react'
// import Die from './Die';
// import { nanoid } from 'nanoid'
// import Confetti from 'react-confetti';

// export default function App() {
//   const [dice, setDice] = useState(generateAllNewDice())
//   const allHeld = dice.every(die => die.isHeld)
//   const allValue = dice.every(die => die.value === dice[0].value)
//   if (
//         allHeld &&
//         allValue
//     ) {
//         console.log("game won 🏆")
//     }

//  function generateAllNewDice(){
//     return new Array(10)
//       .fill(0)
//       .map(() => ({
//         value: Math.ceil(Math.random() * 6),
//         isHeld: false,
//         id: nanoid()
//       })
//     )
//   }

//   function rollDice() {
//       setDice(prevDice => prevDice.map(die =>

//         die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
//         )

//   )

//     }
//     function hold(id) {
//       setDice(oldDice => oldDice.map(die =>
//             die.id === id ?
//                 { ...die, isHeld: !die.isHeld } :
//                 die
//         ))
//     }
//     // const text = () => allHeld && allValue ? "New Game" : "Role";

//     const diceElements = dice.map(dieObj => <Die hold={() => {hold(dieObj.id)}} key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />)
//     return (
//       <main className="block">
//         <h1 className='title'>Tenzies</h1>
//         <p className="instruction">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
//         <div className="dice-container">
//           {diceElements}
//         </div>
//         {allHeld && allValue ? <button className='roll-btn' onClick={() => setDice(generateAllNewDice())}>New game</button> : <button className='roll-btn' onClick={rollDice}>Roll</button> }

//         {(allHeld && allValue) && <Confetti
//           width={window.innerWidth || 300}
//         height={window.innerHeight || 200}
//         />}
//       </main>
//   )
// }

// function generateAllNewDice(){
//       return new Array(10)
//           .fill(0)
//           .map(() => Math.ceil(Math.random() * 6) + 1)
//     }
//   //  OR
//   //   function generateAllNewDice(){
//   //     let newDice = []
//   //     for (let i = 0; i < 10; i++) {
//   //     let rand = Math.floor(Math.random() * 6) + 1;
//   //     newDice.push(rand)
//   //     }
//   //    return newDice
//   //   }
