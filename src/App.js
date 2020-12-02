import React from 'react';
import './App.css';
import Board from './board';
import { data } from './data';

function App() {
  const localTasks = JSON.parse(localStorage.getItem('tasks'));

  return (
    <div>
      <header>
        <h1>Task Management Board</h1>
        <Board initial={localTasks || data} />
      </header>
    </div>
  );
}

export default App;
