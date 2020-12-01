import React, { useState } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskItem from './task-item';
import { grid } from './constants';
import colors from './colors';

const Wrapper = styled.div`
  background-color: ${colors.N30};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: ${grid}px;
  border: ${grid}px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`;

const scrollContainerHeight = 250;

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: ${scrollContainerHeight}px;

  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  padding-bottom: ${grid}px;
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: ${scrollContainerHeight}px;
`;

const Container = styled.div``;

const InnerTaskList = React.memo(function InnerTaskList(props) {
  return props.tasks.map((task, index) => (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <TaskItem
          key={task.id}
          task={task}
          isDragging={dragSnapshot.isDragging}
          isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
          provided={dragProvided}
        />
      )}
    </Draggable>
  ));
});

function InnerList(props) {
  const { tasks, dropProvided } = props;
  // const [currentTasks, setTasks] = useState(tasks);
  const title = props.title ? props.title : null;
  return (
    <Container>
      {title}
      <DropZone ref={dropProvided.innerRef}>
        <InnerTaskList tasks={tasks} />
        {dropProvided.placeholder}
      </DropZone>
      <button
        onClick={() => {
          const newTask = {
            content:
              'Sucking at something is the first step towards being sorta good at something.',
            id: '2',
          };
          // setTasks([...tasks, newTask]);
        }}
      >
        ADD
      </button>
    </Container>
  );
}

export default function TaskList(props) {
  const {
    ignoreContainerClipping,
    internalScroll,
    scrollContainerStyle,
    isDropDisabled,
    isCombineEnabled,
    listId = 'LIST',
    listType,
    style,
    tasks,
    title,
    useClone,
  } = props;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
      renderClone={
        useClone
          ? (provided, snapshot, descriptor) => (
              <TaskItem
                task={tasks[descriptor.source.index]}
                provided={provided}
                isDragging={snapshot.isDragging}
                isClone
              />
            )
          : null
      }
    >
      {(dropProvided, dropSnapshot) => (
        <Wrapper
          style={style}
          isDraggingOver={dropSnapshot.isDraggingOver}
          isDropDisabled={isDropDisabled}
          isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}
        >
          {internalScroll ? (
            <ScrollContainer style={scrollContainerStyle}>
              <InnerList
                tasks={tasks}
                title={title}
                dropProvided={dropProvided}
              />
            </ScrollContainer>
          ) : (
            <InnerList
              tasks={tasks}
              title={title}
              dropProvided={dropProvided}
            />
          )}
        </Wrapper>
      )}
    </Droppable>
  );
}
