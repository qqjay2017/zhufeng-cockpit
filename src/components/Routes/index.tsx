import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './Route';

function Routes() {
  return (
    <BrowserRouter basename=''>
      <Route />
    </BrowserRouter>
  );
}

export default Routes;
