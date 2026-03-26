

import React from "react"

export default function Timer() {
    const [seconds, setSeconds] = React.useState(0)
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
            console.log("Timer is running")
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    
    return (
        <h2>{seconds} seconds</h2>
    )
}


// import React from "react";

// export default function Timer() {
//   const [seconds, setSeconds] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);
//   }, []);

//   return <h2>{seconds}</h2>;
// }
