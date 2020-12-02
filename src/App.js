import React from 'react';
import './App.css';
import Board from './screens/board';
import { data, version } from './data';

function App() {
  const localTasks = JSON.parse(localStorage.getItem('tasks'));
  const localVersion = JSON.parse(localStorage.getItem('version'));

  return (
    <div>
      <header>
        <h1>Task Management Board</h1>
        <Board
          initial={localTasks && localVersion === version ? localTasks : data}
        />
      </header>
    </div>
  );
}

export default App;
