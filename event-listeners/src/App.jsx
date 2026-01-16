
import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    function toggle(id) {
      setPads(prevPads => prevPads.map(item => {
        return item.id === id ? {...item, on: !item.on} : item 
      }))
    }
    
    // function turnAllPadsOff() {
    //     console.log("Turning off") 
    //     setPads(prevPads => prevPads.map(pad => ({
    //         ...pad,
    //         on: false
    //     })))
    // }
    
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            <button className="all-off" >Turn All Off</button>
        </main>
    )
}



// import React from "react"
// import padsData from "./pads"
// import Pad from "./Pad"

// export default function App() {
//     const [pads, setPads] = React.useState(padsData)
    
   
//     const buttonElements = pads.map(pad => (
//             <Pad key={pad.id} color={pad.color} on={pad.on} />
//         ))
//     // const styles = {
//     //   backgroundColor: pads.map((pad) => pad.color)
//     //   // example with color === color: pads.length % 2 === 0 ? "red" : "blue"
//     // }
    
//     return (
//         <main>
//             <div className="pad-container">
//                {buttonElements}
//             </div>
//         </main>
//     )
// }

//Мое решение
// import React from 'react'
// import pads from "./pads"

// export default function App() {
//   console.log(pads)
// const [getPad, setGetPad] = React.useState(pads)
// getPad.map(pad => console.log(pad.color))
   
//     return (
//         <main>
//             <div className="pad-container">
//                 {getPad.map((pad) => {
                  
//                 return <button>{pad.color}</button>
//                 })}
//             </div>
//         </main>
//     )
// }




// import React from "react"
// import Header from "./Header.JSX"
// import Body from "./Body"

// export default function App() {
//     const [userName, setUserName] = React.useState("Joe")
//     return (
//         <main>
//             <Header name={userName} />
//             <Body name={userName} />
//         </main>
//     )
// }




// import React from "react"
// import avatar from "./images/user.png"
// import Star from "./Star"


// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    
  
//     function toggleFavorite() {
//         setContact(prevContact => ({
//             ...prevContact,
//             isFavorite: !prevContact.isFavorite
//         }))
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img
//                     src={avatar}
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">
                    
//                         <Star state={contact.isFavorite} click={toggleFavorite} />

//                     <h2 className="name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="contact">{contact.phone}</p>
//                     <p className="contact">{contact.email}</p>
//                 </div>

//             </article>
//         </main>
//     )
// }




// import React from "react";
// import Count from "./Count";

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   function add() {
//     setCount(prevCount => prevCount + 1)
//   }
//   function subtract() {
//     setCount(prevCount => prevCount - 1)
//   }
//   console.log("App rendered")
//   return (
//         <main className="container">
           
//             <div className="counter">
//                 <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
//                 <Count number={count} />
//                 <button className="plus" onClick={add} aria-label="Increase count">+</button>
//             </div>
//         </main>
//     )
// }




// // //Пример получения всех данных из формы включая массив чекбоксов
// // import React from 'react'
// // export default function App() {

// //   function signUp(formData) {
// //     const data = Object.fromEntries(formData);
// //     const dietaryRestrictions = formData.getAll("dietaryRestrictions")
// //     const allData = {
// //       ...data,
// //       dietaryRestrictions
// //     }
// //     console.log(allData)
// //   }


//   //Пример получения каждого значения из формы по отдельности
//   // function signUp(formData) { 
//   //   const email = formData.get("email")
//   //   const password = formData.get("password")
//   //   const employmentStatus = formData.get("employmentStatus")
//   //   const dietaryRestrictions = formData.getAll("dietaryRestrictions")
//   //   const favColor = formData.get('favColor')
//   //   console.log(email, password, employmentStatus, dietaryRestrictions, favColor)
//   // }
//   const text = 'By default, a <button> inside a <form> without a type attribute will submit it. This can be surprising! If you have your own custom Button React component, consider using <button type="button"> instead of <button> (with no type). Then, to be explicit, use <button type="submit"> for buttons that are supposed to submit the form.'

//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>
//         <label htmlFor="email">Email:</label>
//           <input id='email' type='email' name='email' defaultValue='test@test.com' placeholder='joe@schmoe.com' />
//           <br />
//         <label htmlFor="password">Password:</label>
//           <input id='password' defaultValue='12345' type='password' name='password' placeholder='password' />

//           <label htmlFor='description'>Description</label>
//           <textarea defaultValue={text} id='description' name='description'></textarea>

//           <fieldset>
//             <legend>Employment Status:</legend>
//           <label>
//             <input type='radio' name='employmentStatus' value='unemployed' />
//             Unemployed
//           </label>
//           <label>
//             <input type='radio' name='employmentStatus' defaultChecked={true} value='part-time' />
//             Part-time
//           </label>
//           <label>
//             <input type='radio' name='employmentStatus' value='full-time' />
//             Full-time
//           </label>
//           </fieldset>

//           <fieldset>
//           <legend>Dietary restrictions:</legend>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="kosher" />
//             Kosher
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="vegan" />
//             Vegan
//         </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
//             Gluten-free
//         </label>
//         </fieldset>

//         <label html="favColor">What is your favorite color </label>
//         <select id="favColor" name="favColor" defaultValue="" required>
//           <option value="" disabled>-- Chose a color --</option>
//           <option value="red">Red</option>
//           <option value="orange">Orange</option>
//           <option value="yellow">Yellow</option>
//           <option value="green">Green</option>
//           <option value="blue">Blue</option>
//           <option value="indigo">Indigo</option>
//           <option value="violet">Violet</option>
//         </select>
//         {/* <input type='submit' /> */}

//         <button>Submit</button>
//       </form>
//     </section>
//   )
// }


//Императивный метод отправки формы
// import React from 'react'
// export default function App() {

//   function handleSubmit(event) {
//     event.preventDefault()
//     const formEl = event.currentTarget
//     const formData = new FormData(formEl)
//     const email = formData.get("email")
//     console.log(email)
//     formEl.reset()
//   }

//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form onSubmit={handleSubmit} method="post">
//         <label htmlFor="email">Email:</label>
//           <input id='email' type='email' name='email' placeholder='joe@schmoe.com' />
//           <br />
//         <label htmlFor="password">Password:</label>
//           <input id='password' type='password' name='password' placeholder='password' />
//         {/* <input type='submit' /> */}

//         <button>Submit</button>
//       </form>
//     </section>
//   )
// }

// //====first option <form>
//         <label>Email:
//           <input type='email' name='email' placeholder='joe@schmoe.com' />
//         </label>
//       </form>





// //==========example8================
// import React from "react"
// import avatar from "./images/user.png"
// import starFilled from "./images/star-filled.png"
// import starEmpty from "./images/star-empty.png"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
//     /**
//      * Challenge: Fill in the values in the markup
//      * using the properties of our state object above
//      * (Ignore `isFavorite` for now)
//      */
//     let starIcon = contact.isFavorite ? starFilled : starEmpty
//     function toggleFavorite() {
//         setContact(prevContact => {
//             return {
//                 ...prevContact,
//                 isFavorite: !prevContact.isFavorite
//             }
//         })
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img
//                     src={avatar}
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">
//                     <button
//                         onClick={toggleFavorite}
//                         aria-pressed={contact.isFavorite}
//                         aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
//                         className="favorite-button"
//                     >
//                         <img
//                             src={starIcon}
//                             alt={!contact.isFavorite ? "empty star icon" : "filled star icon"}
//                             className="favorite"
//                         />
//                     </button>
//                     <h2 className="name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="contact">{contact.phone}</p>
//                     <p className="contact">{contact.email}</p>
//                 </div>

//             </article>
//         </main>
//     )
// }




// //==========example7================
// import React from "react"

// export default function App() {
//   /**
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array as an empty array
//      * 
//      * Don't worry about fixing `addFavoriteThing` quite yet.
//      */
//   const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
//   const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
//   "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
//   const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

//   function addFavoriteThing() {
//     setMyFavoriteThings(prevFavThings => [
//       ...prevFavThings, 
//       allFavoriteThings[prevFavThings.length]
//     ])
//     // We'll work on this next, nothing to do here yet.

    
//   }
  
//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">
//         {thingsElements}
//       </section>
//     </main>
//   )
// }




// //==========example6================
// import React from "react"

// export default function App() {
//   const [isGoingOut, setIsGoingOut] = React.useState(true)

//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the button flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
   
//     function handleAnswer() {
//       setIsGoingOut(prev => !prev)
//     }


//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button onClick={handleAnswer} className="value">{isGoingOut ? 'No' : 'Yes'}</button>
//         </main>
//     )
// }


// //==========example5================
// export default function App() {
//     /**
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */
//     const isGoingOut = false
    
//     // let answer = isGoingOut ? "Yes" : "No";
    
    
//     return (
//          <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{isGoingOut ? "Yes" : "No"}</button>
//         </main>
//     )
// }



// //==========example4================
// import React from "react";

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   function add() {
//     setCount(prevCount => prevCount + 1)
//   }
//   function subtract() {
//     setCount(prevCount => prevCount - 1)
//   }
//   return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" onClick={add} aria-label="Increase count">+</button>
//             </div>
//         </main>
//     )
// }




// import React from "react"

// export default function App() {
//     const [count, setCount] = React.useState(0)
//     /**
//      * Note: if you ever need the old value of state
//      * to help you determine the new value of state,
//      * you should pass a callback function to your
//      * state setter function instead of using
//      * state directly. This callback function will
//      * receive the old value of state as its parameter,
//      * which you can then use to determine your new
//      * value of state.
//      */
//     function add() {
//         setCount(prevCount=> prevCount + 1)
//     }

//     function subtract() {
//         setCount(prevCount=> prevCount - 1)
//     }

//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" onClick={add} aria-label="Increase count">+</button>
//             </div>
//         </main>
//     )
// }


// //==========example3================
// // import React from "react"

// // export default function App() {

// //   let [ value, setValue ] = React.useState(0)
// //   function add() {
// //     setValue(value + 1)
// //   }
// //   function addition() {
// //     setValue(value - 1)
// //   }

// //     /**
// //      * Challenge: 
// //      * Create state to track our count value (initial value is 0)
// //      * Don't forget to replace the hard-coded "0" with your new state
// //      */
// //     return (
// //         <main className="container">
// //             <h1>How many times will Bob say "state" in this section?</h1>
// //             <div className="counter">
// //                 <button onClick={addition} className="minus" aria-label="Decrease count">–</button>
// //                 <h2 className="count">{value}</h2>
// //                 <button onClick={add} className="plus" aria-label="Increase count">+</button>
// //             </div>
// //         </main>
// //     )
// // }




// //==========example2================
// // import React from "react"

// // export default function App() {
// //     let [isImportant, setIsImportant] = React.useState("Yes")
// //     function handleClick(event) {
// //       event.preventDefault()
// //       setIsImportant("Definitely")
// //     }
    
// //     return (
// //         <main>
// //             <h1 className="title">Is state important to know?</h1>
// //             <button onClick={handleClick} className="value">{isImportant}</button>
// //         </main>
// //     )
// // }


// // import React from "react"

// // export default function App() {
// //     const result = React.useState("Heck yes")
// //     console.log(result)
    
// //     return (
// //         <main>
// //             <h1 className="title">Is state important to know?</h1>
// //             <button className="value">{result[0]}</button>
// //         </main>
// //     )
// // }

// //==========example1================
// // function App() {
// //   function handleClick() {
// //     console.log("I was clicked!")
// //   }
  
// // function handleMouseOver() {
// //   console.log('onMouseOver')
// // }
// //   return (
// //     <>
// //       <main className="container">
// //       <img onMouseOver={handleMouseOver}
// //         src="https://picsum.photos/640/360"
// //         alt="Placeholder image from Picsum"
// //       />
// //       <button onClick={handleClick}>Click me</button>
// //     </main>
// //     </>
// //   )
// // }

// // export default App
