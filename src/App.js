import React from 'react';
import './App.css';
import Board from './board';
import { authorQuoteMap } from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task board</h1>
        <Board initial={authorQuoteMap} />
      </header>
    </div>
  );
}

export default App;
