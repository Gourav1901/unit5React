import React , {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const loginUser = (username) =>{
    setUser({name:username});

  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
     
    value={{user, loginUser,logoutUser}}
    
    >
      {children}
    </UserContext.Provider>
  );
};