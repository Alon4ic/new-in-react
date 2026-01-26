import React from "react"

export default function Counter() {
    const [result, setResult] = React.useState({
        count: 0,
        step: 1,
        history: []
    })
   function undo() {
    setResult(prev => {
        if (prev.history.length === 0) return prev

        const lastValue = prev.history[prev.history.length - 1]
        const newHistory = prev.history.slice(0, -1)
        return {
        ...prev,
        count: lastValue,
        history: newHistory
      }
    })
   }
    
    function decreaseCount() {
        setResult(prev => ({
            ...prev,
            history: [...prev.history, prev.count],
            count: prev.count - prev.step,
        }))
        history.push(result.count)
    }
    function increaseCount() {
        setResult(prev => ({
            ...prev,
            history: [...prev.history, prev.count],
            count: prev.count + prev.step
        }))
    }
   function decreaseStep() {
  setResult(prev => ({
    ...prev,
    step: Math.max(1, prev.step - 1)
  }))
}
    function increaseStep() {
        setResult(prev => ({
            ...prev,
            step: prev.step + 1
        }))
    }
    function reset() {
        setResult({count: 0, step: result.step})
    }
    function resetAll() {
        setResult({count: 0, step: 1, history: []})
    }
    function doubleCount() {
        setResult(prev => ({
            ...prev,
            count: prev.count * 2
        }))
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>Value count: {result.count}</p>
            <p>Value step: {result.step}</p>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseStep}>Decrease Step</button>
            <button onClick={increaseStep}>Increase Step</button>
            <button onClick={undo}>Undo</button>
            <button onClick={reset}>Reset Count</button>
            <button onClick={resetAll}>Reset All</button>
            <button onClick={doubleCount}>Double Count</button>
            <pre>{JSON.stringify(result.history, null, 2 )}</pre>
        </div>
    )
}



// export default function Counter() {
//     const [result, setResult] = React.useState({
//         count: 0,
//         step: 1
//     })

//     function decreaseCount() {
//         setResult(prev => ({
//             ...prev,
//             count: prev.count - prev.step
//         }))
//     }
//     function increaseCount() {
//         setResult(prev => ({
//             ...prev,
//             count: prev.count + prev.step
//         }))
//     }
//    function decreaseStep() {
//   setResult(prev => ({
//     ...prev,
//     step: Math.max(1, prev.step - 1)
//   }))
// }
//     function increaseStep() {
//         setResult(prev => ({
//             ...prev,
//             step: prev.step + 1
//         }))
//     }
//     function reset() {
//         setResult({count: 0, step: result.step})
//     }
//     function resetAll() {
//         setResult({count: 0, step: 1})
//     }
//     function doubleCount() {
//         setResult(prev => ({
//             ...prev,
//             count: prev.count * 2
//         }))
//     }

//     return (
//         <div>
//             <h2>Counter</h2>
//             <p>Value count: {result.count}</p>
//             <p>Value step: {result.step}</p>
//             <button onClick={decreaseCount}>Decrease Count</button>
//             <button onClick={increaseCount}>Increase Count</button>
//             <button onClick={decreaseStep}>Decrease Step</button>
//             <button onClick={increaseStep}>Increase Step</button>
//             <button onClick={reset}>Reset Count</button>
//             <button onClick={resetAll}>Reset All</button>
//             <button onClick={doubleCount}>Double Count</button>
//         </div>
//     )
// }



// export default function Counter() {
//     const [count, setCount] = React.useState(0)

//     function decrease() {
//         setCount(prevCount => prevCount - 1)
//     }
//     function increase() {
//         setCount(prevCount => prevCount + 1)
//     }
//     function reset() {
//         setCount(0)
//     }
//     function double() {
//         setCount(prevCount => prevCount * 2)
//     }
//     function increaseBy5() {
//         setCount(prevCount => prevCount + 5)
//     }
//     function half() {
//         setCount(prevCount => Math.floor(prevCount / 2))
//     }

//     return (
//         <div>
//             <h2>Counter</h2>
//             <p>Value: {count}</p>
//             <button onClick={decrease}>Decrease</button>
//             <button onClick={increase}>Increase</button>
//             <button onClick={reset}>Reset</button>
//             <button onClick={double}>Double</button>
//             <button onClick={increaseBy5}>Increase By 5</button>
//             <button onClick={half}>Half</button>
//         </div>
//     )
// }