import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

import './assets/styles/style.css';
// import './assets/styles/framework.css';
import './assets/styles/line-awesome.css';
import './assets/styles/animate.css';
import './assets/styles/select2.min.css';
import './assets/styles/poll.css';



ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
