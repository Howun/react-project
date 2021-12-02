import React, { useState } from "react";
import "./CounterBox.scss";


const CounterBox = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter (counter + 1)
  };

  const handleDecrement = () => {
    if (counter === 0) {
    } else {
    setCounter (counter - 1)
    }
  };

  return <div className="counter-container">
  <p>Counter</p>
  <div className="counter">
    <button className="counter__decrement counterBtn" onClick={handleDecrement}>-</button>
    <p className="counter__number  font-link">{counter}</p>
    <button className="counter__increment counterBtn" onClick={handleIncrement}>+</button>
  </div>
  </div>
}

export default CounterBox;