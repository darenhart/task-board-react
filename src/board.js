import React, { createContext, useReducer } from 'react';
import styled from 'styled-components';
import Column from './column';
import colors from './colors';
import { reorderTaskMap } from './reorder';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { tasksReducer } from './tasksReducer';

const Container = styled.div`
  background-color: ${colors.N90};
  min-height: 100vh;
  min-width: 100vw;
  display: inline-flex;
`;

export const ContextTasks = createContext();

const Board = ({ initial }) => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: initial });

  const columnTitles = Object.keys(initial);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped nowhere
    if (!destination) {
      return;
    }

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const data = reorderTaskMap({
      taskMap: state.tasks,
      source,
      destination,
    });

    dispatch({ type: 'UPDATE', value: data.taskMap });
  };

  const board = (
    <Droppable droppableId="board" direction="horizontal">
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          {columnTitles.map((key, index) => (
            <Column
              key={key}
              index={index}
              title={key}
              tasks={state.tasks[key]}
            />
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );

  return (
    <ContextTasks.Provider value={[state, dispatch]}>
      <DragDropContext onDragEnd={onDragEnd}>{board}</DragDropContext>
    </ContextTasks.Provider>
  );
};

export default Board;
