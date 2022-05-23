import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/styles/base.less';

import Router from 'components/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

