import React from 'react';
import {Navigate} from 'react-router-dom'
function Pages() {
  return (
    <Navigate to="/dashboard" replace={true} />
  );
}

export default Pages;
