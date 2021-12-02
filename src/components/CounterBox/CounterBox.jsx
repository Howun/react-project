import React, { useState } from "react";
import "./CounterBox.scss";


const CounterBox = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter (counter + 1)
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter (counter = 0)
    } else {
    setCounter (counter - 1)
    }
  };

  return  <div>
    <button onClick={handleDecrement}>-</button>
    <p>{counter}</p>
    <button onClick={handleIncrement}>+</button>
  </div>
}

export default CounterBox;