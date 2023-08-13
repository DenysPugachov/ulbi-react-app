import { useState } from "react"
import "./Counter.scss"

export const  Counter = ()=> {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      Count: {count}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <br/>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
