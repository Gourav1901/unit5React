
import React, { useContext } from 'react';
import { UserContext } from './Login';

const Profile = () => {
  const { user, loginUser } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h2>{`Welcome, ${user.name}!`}</h2>
      ) : (
        <>
          <p>No user logged in. Please log in.</p>
          <button onClick={() => loginUser('John')}>Login as John</button>
        </>
      )}
    </div>
  );
};

export default Profile;
