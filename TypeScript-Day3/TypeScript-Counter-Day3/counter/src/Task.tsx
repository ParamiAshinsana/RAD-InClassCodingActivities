import { useState, useEffect } from "react";

export default function Task() {
  const [name, setName] = useState('GDSE');
  const [count, setCount] = useState(1);

  
  useEffect(() => {
    if (count % 5 === 0) {
      setName('GDSE');
    } else {
      setName('IJSE');
    }
  });

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>Number is: {count}</p>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
