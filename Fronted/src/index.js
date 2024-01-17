import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MouseFollwer from './components/mouseFollwer/MouseFollwer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <MouseFollwer/>
    </BrowserRouter>
  </React.StrictMode>
);


