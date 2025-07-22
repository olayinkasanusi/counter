import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  const [steps, setSteps] = useState(0);
  const increment = () => setSteps(steps + 1);
  const decrement = () => setSteps(steps - 1);
  const [counter, setCounter] = useState(steps);
  const countUp = () => setCounter(counter + steps);
  const countDown = () => setCounter(counter - steps);
  console.log(counter);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + counter);
  return (
    <>
      <div>
        <button onClick={steps !== 0 ? decrement : null}>-</button>
        <span>Steps: {steps}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={counter - steps < 0 ? null : countDown}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <p>
          You're {counter}day far from {`${date.toDateString()}`}
        </p>
      </div>
    </>
  );
}
