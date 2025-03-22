import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard</p>
      <nav>
        <ul>
          <li><Link to="/resources/word-cloud">Word Cloud Generator</Link></li>
          <li><Link to="/whiteboard">Whiteboard</Link></li>
          <li><Link to="/settings/profile">Profile Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
