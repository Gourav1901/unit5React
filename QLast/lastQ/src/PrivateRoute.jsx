import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;