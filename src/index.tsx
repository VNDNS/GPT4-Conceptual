// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalProvider from './contexts/GlobalProvider';


ReactDOM.render(
  <>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>,document.getElementById('root'))

  
  
