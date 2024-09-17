import React, { useReducer } from 'react';

// Step 1: Define the initial state
const initialState = {
  theme: 'light', // Default theme is 'light'
};

// Step 2: Create a reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light', // Toggle between light and dark
      };
    default:
      return state;
  }
};

const ThemeToggleApp = () => {
  // Step 3: Use the useReducer hook
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Step 4: Define styles based on the current theme
  const themeStyles = {
    backgroundColor: state.theme === 'light' ? '#fff' : '#333',
    color: state.theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={themeStyles}>
      {/* Step 5: Display the current theme */}
      <h1>{`Current Theme: ${state.theme}`}</h1>
      
      {/* Step 6: Button to toggle theme */}
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggleApp;
