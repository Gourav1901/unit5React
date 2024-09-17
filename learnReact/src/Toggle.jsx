import React, { useReducer } from 'react';

// Step 1: Define the initial state
const initialState = { isVisible: false };

// Step 2: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

const ToggleMessageApp = () => {
  // Step 3: Initialize useReducer with reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Step 5: Button to dispatch TOGGLE_VISIBILITY action */}
      <button onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}>
        Toggle Message
      </button>

      {/* Step 4: Conditionally render the message based on isVisible */}
      {state.isVisible && <h1>Hello, World!</h1>}
    </div>
  );
};

export default ToggleMessageApp;
