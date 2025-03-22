import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profile Settings</h1>
      <p>Profile settings form will go here</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default Profile;
