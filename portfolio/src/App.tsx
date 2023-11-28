import React from 'react';
import logo from './wsh_resized.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
