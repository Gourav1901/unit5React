// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from './Action';

const App = () => {
  // Access state from the Redux store
  const counter = useSelector((state) => state.counter);

  // Dispatch actions to update the state
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      <div>
        <h2>State as JSON:</h2>
        <pre>{JSON.stringify({ counter }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
