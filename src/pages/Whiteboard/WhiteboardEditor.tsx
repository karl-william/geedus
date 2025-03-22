import React from 'react';
import { Link } from 'react-router-dom';

const WhiteboardEditor = () => {
  return (
    <div>
      <h1>Whiteboard Editor</h1>
      <p>Whiteboard editor will go here</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default WhiteboardEditor;
