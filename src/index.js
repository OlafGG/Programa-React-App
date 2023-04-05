import React from 'react';
import ReactDOM from 'react-dom/client';
//add bootstrsap to the proyect
import 'bootstrap/dist/css/bootstrap.css'
//! Your css need to be below bootstrap, the reson is dont be in front of your css
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
