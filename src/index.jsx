import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/stylesheets/index.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
