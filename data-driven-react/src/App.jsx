import React from 'react';
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"

export default function App() {
    console.log(data)
    const entryElement = data.map((entry) => {
        return (<Entry 
            key={entry.id}
            entry={entry}
        /> )
    })
    console.log(entryElement)
    return (
        <main className='container'>
            <Header />
            <div className="middle-block">
                {entryElement}
            </div>
        </main>
    )
}
// import React from 'react';
// import Header from "./components/Header"
// import Entry from "./components/Entry"
// import data from "./data.js"

// export default function App() {
//     console.log(data)
//     const entryElement = data.map((entry) => {
//         return (<Entry 
//             key={entry.id}
//             {...entry}
//         /> )
//     })
//     console.log(entryElement)
//     return (
//         <main className='container'>
//             <Header />
//             <div className="middle-block">
//                 {entryElement}
//             </div>
//         </main>
//     )
// }
