// import { useState } from "react"
// import WindowTracker from "./components/WindowTracker"


// export default function App() {
//     const [show, setShow] = useState(true)

//     function toggleShow() {
//         setShow(prev => !prev)
//     }
    
//     /**
//      * Challenge:
//      * 1. Create state called `show`, default to `true`
//      * 2. When the button is clicked, toggle `show`
//      * 3. Only display `<WindowTracker>` if `show` is `true`
//      */
    
//     return (
//         <main className="container">
//             <button onClick={toggleShow} >
//                 Toggle WindowTracker
//             </button>
//             {show && <WindowTracker />}
//             {/* //OR
//             {show ? <WindowTracker /> : ""} */}
//         </main>
//     )

// }

// import React from "react"

// export default function App(props) {
//     const [starWarsData, setStarWarsData] = React.useState(null)
//     const [count, setCount] = React.useState(0)
    
//     console.log("Rendered!")
//     // React.useEffect(function(){
//     //     console.log("Effect ran")
//     //     fetch("https://jsonplaceholder.typicode.com/users/1")
//     //     .then(res => res.json())
//     //     .then(data => setStarWarsData(data))
//     // }, [count])

//     React.useEffect(() => {
//         fetch(`https://api.imgflip.com/get_memes`)
//         .then(result => result.json())
//         .then(data => setStarWarsData(data))
//     }, [count])
    
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }



import Main from "./components/Main"
import Header from "./components/Header"

export default function App() {
    
    return (
        <>
        <h1>Hello</h1>
            <Header />
            <Main />
        </>  
    )
}

// import React from "react"
// import Counter from "./Counter"
// import SmartCount from "./SmartCount"
// import SmartCounterPro from "./SmartCounterPro"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState(null)
//     // console.log("Render")
//     // fetch("https://jsonplaceholder.typicode.com/users/1")
//     //   .then(res =>res.json())
//     //   .then(data => setStarWarsData(data))

    
//     return (
//         <div>
//            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//            <SmartCounterPro />
//         </div>
//     )
// }