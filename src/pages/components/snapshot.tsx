import { useState } from 'react';

/**
 * The Counter component is a simple component that displays a number 
 * and a button to increment it.
 * 
 * The component illustrates how React does not update the state immediately
 * but batches the updates and performs them in a single render cycle.
 */
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
