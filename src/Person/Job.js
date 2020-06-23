import React from 'react';

// This is a dynamic content
const Job = () => {
  // Put stuff in {} to make it code, not text
  return (
    <p>This Person has a job!! and have been doing it for {Math.floor(Math.random() * 20)} years</p>  
  );
};

export default Job;