import React from "react"

export default function Pad(props) {
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}

// import React from 'react'


// export default function Pad(props) {
//     const [include, setInclude] = React.useState(props.on)
//     function toggle() {
//         setInclude(prev => !prev )
//         props.func()
//         console.log(props.num)
//     }
//     console.log(include)
//   return (
//     <button onClick={toggle} style={{backgroundColor: props.color}} className={include ? "on" : ""}>{props.num}</button>
//   )
// }
