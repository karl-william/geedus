import React from 'react';
import { Link } from 'react-router-dom';

const WordCloudGenerator = () => {
  return (
    <div>
      <h1>Word Cloud Generator</h1>
      <p>Word cloud generator tool will go here</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default WordCloudGenerator;
