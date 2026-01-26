import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    const [count, setCount] = React.useState(0)
    
    console.log("Rendered!")
    // React.useEffect(function(){
    //     console.log("Effect ran")
    //     fetch("https://jsonplaceholder.typicode.com/users/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
    // }, [count])

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(result => result.json())
        .then(data => setStarWarsData(data))
    }, [count])
    console.log(setCount.)
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}



// import Main from "./components/Main"

// export default function App() {
    
//     return (
//         <>
//             <Header />
//             <Main />
//         </>
//     )
// }

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