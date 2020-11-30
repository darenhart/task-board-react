import React from 'react';
import './App.css';
import Board from './board';
import { data } from './data';

function App() {
  return (
    <div>
      <header>
        <h1>Task Management Board</h1>
        <Board initial={data} />
      </header>
    </div>
  );
}

export default App;
