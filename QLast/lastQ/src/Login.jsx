import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const { dispatch } = useAuth();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      // Here you would typically make an API call to authenticate
      // For this example, we'll just simulate a successful login
      const user = { id: '1', name: 'John Doe' };
      localStorage.setItem('authToken', 'dummy-token');
      dispatch({ type: 'LOGIN', payload: user });
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <span>This field is required and must be a valid email</span>}
      
      <input type="password" name="password" ref={register({ required: true, minLength: 6 })} />
      {errors.password && <span>Password must be at least 6 characters long</span>}
      
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;