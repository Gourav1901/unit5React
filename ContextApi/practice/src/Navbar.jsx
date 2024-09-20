import React, {useContext} from 'react';
import { UserContext } from './Login';
import { ThemeContext } from './Theme';

const Navbar = () =>{
  const {user, logoutUser} = useContext(UserContext);
  const {theme,toggleTheme} = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#000' :  '#fff' }}>
     
      <h1>Website</h1>
      {user ? (
        <>
        <p>{`Hello, ${user.name}`}</p>
        <button onClick={logoutUser}>Logout</button>
        </>
      ):(
        <p>Please log in</p>
      
      ) }

      <button onClick = {toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

    </nav>
  );
};

export default Navbar;