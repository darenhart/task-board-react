import React from 'react';
import Board from './screens/board';
import { data, version } from './data';
import styled from 'styled-components';
import colors from './colors';

const AppWrapper = styled.div`
  background-color: ${colors.N90};
`;

const Title = styled.h2`
  margin-top: 0;
  padding: 10px;
  color: ${colors.N0};
`;

function App() {
  const localTasks = JSON.parse(localStorage.getItem('tasks'));
  const localVersion = JSON.parse(localStorage.getItem('version'));

  return (
    <AppWrapper>
      <header>
        <Title>TASK MANAGEMENT BOARD</Title>
        <Board
          initial={localTasks && localVersion === version ? localTasks : data}
        />
      </header>
    </AppWrapper>
  );
}

export default App;
