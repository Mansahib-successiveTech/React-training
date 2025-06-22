"use client";
import { useState } from "react";

const CounterWithStep = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const increaseCounterWithStep = () => setCount(count + parseInt(step));

  const decreaseCounterWithStep = () => setCount(count - step);
  return (
    <>
      <p>enter value of step</p>
      <input type="number" onChange={(e) => setStep(e.target.value)} />

      <p>count:{count}</p>
      <button onClick={increaseCounterWithStep}>Increment with {step}</button>
      <button onClick={decreaseCounterWithStep}>decrement with {step}</button>
    </>
  );
};

export default CounterWithStep;
