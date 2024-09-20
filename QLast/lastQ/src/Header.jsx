import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
  const { state, dispatch } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    dispatch({ type: 'LOGOUT' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/search">Search</Link></li>
          {state.isAuthenticated ? (
            <li><button onClick={handleLogout}>Logout</button></li>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;