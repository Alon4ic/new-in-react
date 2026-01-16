import React from 'react'

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function handleToggle() {
        setIsShown(prevState => !prevState)
        
    }
    

    return(<div className="inner">
        {props.setup && 
            <h3 className="inner-setup1">{props.setup}</h3>
        }
        {isShown && <p className="inner-punchline">{props.punchline}</p>}
        <button onClick={handleToggle}>{isShown ? "Hide" : "Show"} punshline</button>
    </div>)
}


// export default function Joke(props) {
//     return (
//         <>
//             <p style={{display: props.setup ? "block" : "none"}} className="setup">Setup: {props.setup}</p>
//             <p className="punchline">Punchline: {props.punchline}</p>
//             <hr />
//         </>
//     )
// }