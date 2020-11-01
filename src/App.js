import React from 'react';
import logo from './logo-white.svg';
import './App.css';
import { Portfolio } from './Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App och webbutveckling i Göteborg <br/>
          <a href="mailto:hello@causam.se">hello@causam.se</a>
        </p>
      </header>
      <Portfolio />
    </div>
  );
}

export default App;
