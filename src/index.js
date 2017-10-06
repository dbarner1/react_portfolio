import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './app.js'
import React from 'react';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
