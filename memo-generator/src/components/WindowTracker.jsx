import React, { useState } from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    React.useEffect(() => {
        // window.addEventListener("resize", function() {
        //     setWindowWidth(window.innerWidth)
        // })
        // // //or
        function handleWidth() {
            console.log('Resized!')
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleWidth)
        handleWidth()
        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
