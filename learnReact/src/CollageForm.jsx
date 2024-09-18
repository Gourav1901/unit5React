import React, { useReducer, useState } from 'react';

// Step 1: Define the initial state for the form
const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: {
      name: '',
      locality: {
        pinCode: '',
        landmark: ''
      }
    },
    state: '',
    coordinates: {
      latitude: '',
      longitude: ''
    }
  },
  courses_offered: []
};

// Step 2: Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_ESTABLISHMENT_YEAR':
      return { ...state, establishment_year: action.payload };
    case 'SET_BUILDING':
      return { ...state, address: { ...state.address, building: action.payload } };
    case 'SET_STREET':
      return { ...state, address: { ...state.address, street: action.payload } };
    case 'SET_CITY':
      return { ...state, address: { ...state.address, city: { ...state.address.city, name: action.payload } } };
    case 'SET_PINCODE':
      return { ...state, address: { ...state.address, city: { ...state.address.city, locality: { ...state.address.city.locality, pinCode: action.payload } } } };
    case 'SET_LANDMARK':
      return { ...state, address: { ...state.address, city: { ...state.address.city, locality: { ...state.address.city.locality, landmark: action.payload } } } };
    case 'SET_STATE':
      return { ...state, address: { ...state.address, state: action.payload } };
    case 'SET_LATITUDE':
      return { ...state, address: { ...state.address, coordinates: { ...state.address.coordinates, latitude: action.payload } } };
    case 'SET_LONGITUDE':
      return { ...state, address: { ...state.address, coordinates: { ...state.address.coordinates, longitude: action.payload } } };
    case 'ADD_COURSE':
      return { ...state, courses_offered: [...state.courses_offered, action.payload] };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const CollegeForm = () => {
  // Step 3: Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);
  const [course, setCourse] = useState(''); // For managing individual course input

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', state); // Display entered form data in console
  };

  // Step 5: Reset the form
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Add College Details</h1>

      {/* Step 6: Create the form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>College Name: </label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Establishment Year: </label>
          <input
            type="number"
            value={state.establishment_year}
            onChange={(e) => dispatch({ type: 'SET_ESTABLISHMENT_YEAR', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Building: </label>
          <input
            type="text"
            value={state.address.building}
            onChange={(e) => dispatch({ type: 'SET_BUILDING', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Street: </label>
          <input
            type="text"
            value={state.address.street}
            onChange={(e) => dispatch({ type: 'SET_STREET', payload: e.target.value })}
          />
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            value={state.address.city.name}
            onChange={(e) => dispatch({ type: 'SET_CITY', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Pincode: </label>
          <input
            type="text"
            value={state.address.city.locality.pinCode}
            onChange={(e) => dispatch({ type: 'SET_PINCODE', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Landmark: </label>
          <input
            type="text"
            value={state.address.city.locality.landmark}
            onChange={(e) => dispatch({ type: 'SET_LANDMARK', payload: e.target.value })}
          />
        </div>
        <div>
          <label>State: </label>
          <input
            type="text"
            value={state.address.state}
            onChange={(e) => dispatch({ type: 'SET_STATE', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Latitude: </label>
          <input
            type="text"
            value={state.address.coordinates.latitude}
            onChange={(e) => dispatch({ type: 'SET_LATITUDE', payload: e.target.value })}
          />
        </div>
        <div>
          <label>Longitude: </label>
          <input
            type="text"
            value={state.address.coordinates.longitude}
            onChange={(e) => dispatch({ type: 'SET_LONGITUDE', payload: e.target.value })}
          />
        </div>

        {/* Step 7: Adding courses */}
        <div>
          <label>Course: </label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              if (course) {
                dispatch({ type: 'ADD_COURSE', payload: course });
                setCourse('');
              }
            }}
          >
            Add Course
          </button>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      </form>

      {/* Step 8: Display form data */}
      <div>
        <h2>Entered College Details:</h2>
        <div>College Name: {state.name}</div>
        <div>Establishment Year: {state.establishment_year}</div>
        <div>Building: {state.address.building}</div>
        <div>Street: {state.address.street}</div>
        <div>City: {state.address.city.name}</div>
        <div>Pincode: {state.address.city.locality.pinCode}</div>
        <div>Landmark: {state.address.city.locality.landmark}</div>
        <div>State: {state.address.state}</div>
        <div>Latitude: {state.address.coordinates.latitude}</div>
        <div>Longitude: {state.address.coordinates.longitude}</div>
        <div>Courses Offered: {state.courses_offered.join(', ')}</div>
      </div>
    </div>
  );
};

export default CollegeForm;
