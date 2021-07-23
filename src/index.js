import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './companents/App/App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener('DOMContentLoaded' , function(){
  window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 0)
  })
})
reportWebVitals();
