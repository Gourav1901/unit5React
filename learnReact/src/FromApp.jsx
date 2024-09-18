import React, { useReducer, useState } from 'react';

// Step 1: Define the initial state
const initialState = {
  email: '',
  password: ''
};

// Step 2: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL':
      return { ...state, email: action.payload };
    case 'PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const FormApp = () => {
  // Step 3: Initialize useReducer with reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false); // To track if the form is submitted

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Step 5: Handle form reset
  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setSubmitted(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Form</h1>

      {/* Step 6: Create the form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={state.password}
            onChange={(e) => dispatch({ type: 'PASSWORD', payload: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </form>

      {/* Step 7: Conditionally render form data or 'No details found' */}
      {!submitted ? (
        <div>No details found</div>
      ) : (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      )}
    </div>
  );
};

export default FormApp;
