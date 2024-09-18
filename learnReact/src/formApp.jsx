import React,{useReducer,useState} from 'react';
const initialState = {
  email:'',
  password:''
};

const reducer = (state,action) =>{
  switch(action.type){
    case 'EMAIL':
      return {...state, email:action.payload};
    case 'PASSWORD':
      return {...state, password:action.payload};
    
    case 'RESET':
      return initialState
    
      default:
        throw new Error('INvalid action type');

  }
};

const Fpp = () =>{
  const [state,dispatch] = useReducer(reducer,initialState);
  const [submitted,setSubmitted] =useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmitted(true);
  };
  
  const handleReset = () => {
    dispatch({type:'RESET'});
    setSubmitted(false);
  };

  return (
    <div style ={{textAlign:'center',marginTop:'20px'}}>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label >Email:</label>
          <input 
          type="email"
          value={state.email}
          onChange= {(e) => dispatch({type:'EMAIL',payload:e.target.value})}
          required
          />
        </div>
        <div>
          <label >password:</label>
          <input 
          type="password"
          value={state.password}
          onChange={(e) => dispatch({type:'PASSWORD',payload: e.target.value})}
          required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      
      {!submitted ? (
        <div>No details found</div>
      ):( <div>
        <div>User Email:{state.email}</div>
        <div>User Password:{state.password}</div>
      </div>
      )} ;

      </form>
    </div>
  );

};

export default Fpp;