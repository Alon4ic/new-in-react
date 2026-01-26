import React, {useState} from 'react'

export default function SmartCount() {
    const [raschet, setRaschet] = useState({
        value: 0,
        step: 1,
        history: []
    })
    function increase(){
        setRaschet(prev => ({
            ...prev,
            history: [...prev.history, prev.value],
            value: prev.value + prev.step
        }))
    }
    function decrease(){
        setRaschet(prev => ({
            ...prev,
            history: [...prev.history, prev.value],
            value: prev.value - prev.step
        }))
    }
    function increaseStep(){
        setRaschet(prev => ({
            ...prev,
            step: prev.step + 1
        }))
    }
    function decreaseStep(){
        setRaschet(prev => ({
            ...prev,
            value: Math.max(1, prev.step - 1)
        }))
    }
    function double() {
        setRaschet(prev => ({
            ...prev,
            value: prev.value * 2,
            history: [...prev.history, prev.value ]
        }))
    }
    function resetValue() {
        setRaschet(prev => ({
            ...prev,
            value: 0,
            history: [...prev.history, prev.value]
        }))
    }
    function resetAll() {
        setRaschet({value: 0, step: 1, height: []})
    }
    function undo() {
        setRaschet(prev => {
            if(prev.history.length === 0) return prev
            const lastValue = prev.history[prev.history.length - 1]
            return {
                ...prev,
                value: lastValue
            }
        })
    }
  return (
    <div>
      <p>Value: {raschet.value}</p>
      <p>Step: {raschet.step}</p>
      <p>History length: {raschet.history.length}</p>
      <br />
      <button onClick={increase}>Increase value</button>
      <button onClick={decrease}>Decrease value</button>
      <br />
      <button onClick={increaseStep}>Increase Step</button>
      <button onClick={decreaseStep}>Decrease Step</button>
      <br />
      <button onClick={double}>Double Value</button>
      <button onClick={resetValue}>Reset Value</button>
      <button onClick={resetAll}>Reset All</button>
      <br />
      <button onClick={undo}>Undo</button>
      <pre>{JSON.stringify(raschet.history, null, 2)}</pre>

    </div>
  )
}
