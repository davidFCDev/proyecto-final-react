// React imports
import React from 'react';
import { createRoot } from 'react-dom/client';

// Redux imports
// import { Provider } from 'react-redux';

import App from './components/App';

// Styles

import './styles/css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO Create store and middleware Redux Saga

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
