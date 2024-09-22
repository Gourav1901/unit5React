// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  counter: 0,
};

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer function to handle actions
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(counterReducer);

export default store;
