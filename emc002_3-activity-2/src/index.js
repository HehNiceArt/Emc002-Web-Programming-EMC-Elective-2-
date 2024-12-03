import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='shape-container'>
      <div className="shape circle" style={{ top: '5%', left: '15%' }}></div>
      <div className="shape circle" style={{ top: '15%', left: '45%' }}></div>
      <div className="shape circle" style={{ top: '65%', left: '55%' }}></div>
      <div className="shape square" style={{ top: '25%', left: '75%' }}></div>
      <div className="shape triangle" style={{ top: '45%', left: '25%' }}></div>
      <div className="shape square" style={{ top: '35%', left: '85%' }}></div>
      <div className="shape triangle" style={{ top: '55%', left: '35%' }}></div>
      <div className="shape square" style={{ top: '75%', left: '45%' }}></div>
      <div className="shape triangle" style={{ top: '85%', left: '65%' }}></div>
      <div className="shape circle" style={{ top: '95%', left: '75%' }}></div>
      <div className="shape circle" style={{ top: '10%', left: '30%' }}></div>
      <div className="shape circle" style={{ top: '20%', left: '50%' }}></div>
      <div className="shape square" style={{ top: '30%', left: '60%' }}></div>
      <div className="shape triangle" style={{ top: '40%', left: '70%' }}></div>
      <div className="shape square" style={{ top: '50%', left: '80%' }}></div>
      <div className="shape triangle" style={{ top: '60%', left: '90%' }}></div>
      <div className="shape square" style={{ top: '70%', left: '20%' }}></div>
      <div className="shape triangle" style={{ top: '80%', left: '40%' }}></div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
