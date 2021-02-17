import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isError, setError] = useState(false);

  const decreaseCount = () => {
    if (count === 0) {
      setError(true);
      return;
    }

    setCount(count - 1);
  };

  const increaseCount = () => {
    if (isError) {
      setError(false);
    }

    setCount(count + 1);
  };

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">The counter is: <span data-test="count">{count}</span></h1>
      <button data-test="counter-button" onClick={increaseCount}>Increase</button>
      <button data-test="counter-button-decrease" onClick={decreaseCount}>Decrease</button>
      { isError && <div data-test="counter-error">Counter can't be lower than 0</div> }
    </div>
  );
}

export default App;
