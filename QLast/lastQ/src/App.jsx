import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import PrivateRoute from './components/PrivateRoute';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';

const initialState = {
  user: null,
  isAuthenticated: false,
  theme: 'light',
  searchResults: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10
  },
  displayMode: 'paginated' // or 'infinite'
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    case 'SET_PAGINATION':
      return { ...state, pagination: { ...state.pagination, ...action.payload } };
    case 'SET_DISPLAY_MODE':
      return { ...state, displayMode: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Check for stored auth token and set initial auth state
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate token and set user data
      // This is a placeholder and should be replaced with actual token validation
      dispatch({ type: 'LOGIN', payload: { id: '1', name: 'John Doe' } });
    }
  }, []);

  return (
    <Router>
      <AuthProvider value={{ state, dispatch }}>
        <ThemeProvider value={{ theme: state.theme, setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }) }}>
          <div className={`App ${state.theme}`}>
            <Header />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/search" component={Search} />
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;