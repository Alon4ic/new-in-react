import React from 'react'

function Count() {
    const [count, setCount] = React.useState(0);
    function increment() {
      setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
      setCount((prevCount) => prevCount - 1);
    }
  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <h2>Count: {count}</h2>
    </>
  );
}
export default React.memo(Count)