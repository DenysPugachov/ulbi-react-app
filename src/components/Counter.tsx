import { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (  
    <>
      <button className={classes.btn_red} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      Count: {count}
      <button className={classes.btn_orange}onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <br />
      <button className={classes.btn_green} onClick={() => setCount(0)}>Reset</button>
    </ >
  );
}
