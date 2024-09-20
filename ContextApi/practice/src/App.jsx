// App.js
import React from 'react';
import { ThemeProvider } from './Theme';
import { UserProvider } from './Login';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Navbar />
        <Profile />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
