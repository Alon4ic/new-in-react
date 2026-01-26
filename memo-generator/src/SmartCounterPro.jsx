import React, {useState} from 'react'

export default function SmartCounterPro() {
    const [state, setState] = useState({
        value: 0,
        step: 1,
        min: 0,
        max: 10,
        history: [],
        locked: false
    })
    function increase() {
        setState(prev => {
            if (state.locked === false){
            if (state.value >= 10) return {
                ...prev,
                value: 10
            }
            return {
                ...prev,
                value: prev.value + prev.step,
                history: [...prev.history, prev.value] 
            }
        }
        return prev
        })
    }
    function decrease() {
        setState(prev => {
            if (state.locked === false) {
                if (state.value <= 0) return {
                    ...prev,
                    value: 0
                }
                return {
                    ...prev,
                    value: prev.value - prev.step,
                    history: [...prev.history, prev.value]
                }
            }
            return prev
        })
    }
    function increaseStep() {
        setState(prev => {
            if (state.locked === true) return {
            ...prev,
            step: prev.step + 1
            }
            return prev
        })
    }
    function decreaseStep() {
        setState(prev => {
            if (state.locked === true) return {
            ...prev,
            step: Math.max(1, prev.step - 1)
            }
            return prev
        })
    }
    function undo() {
        setState(prev => {
            if (prev.locked && state.history.length > 0) {
                const copyHistory = [...prev.history]
                const elem = copyHistory.pop()
                return {
                    ...prev,
                    value: elem,
                    history: copyHistory
                }
            
            }
            return prev
        })
    }
    function toggleLock(){
        setState(prev => ({
            ...prev,
            locked: !prev.locked
        }))
    }
    function resetValue() {
        setState(prev => ({
            ...prev,
            value: 0
        }))
    }
    function resetAll() {
        setState(prev => ({
            ...prev,
            value: 0,
            step: 1,
            history: [],
            locked: false
        }))
    }
  return (
    <div>
      <p>Value: {state.value}</p>
      <p>Step: {state.step}</p>
      <br />
      <p>Min:{state.min} / Max:{state.max}</p>
      <br />
      <p>History Length: {state.history.length}</p>
      <p>Undo: {state.history.length > 0 ? state.history[state.history.length - 1] : 'No history'}</p>
      <p>Locked status: {String(state.locked)}</p>
      <br />
      <br />
      <button onClick={increase}>Increase Value</button>
      <button onClick={decrease}>Decrease Value</button>
      <br />
      <button onClick={increaseStep}>Increase Step</button>
      <button onClick={decreaseStep}>Decrease Step</button>
      <br />
      <button onClick={undo}>Undo: </button>
      <button onClick={toggleLock}>Toggle.lock</button>
      <br />
      <button onClick={resetValue}>Reset Value</button>
      <button onClick={resetAll}>Reset All</button>
      <br />
      <pre>{JSON.stringify(state.history, null, 2)}</pre>
    </div>
  )
}
