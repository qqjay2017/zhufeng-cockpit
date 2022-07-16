import React from 'react';
import ReactDOM from 'react-dom/client';
import Tip from '@/components/Tip';


import './index.less'
import Routes from './components/Routes';
import 'normalize.css/normalize.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <Routes />
);

