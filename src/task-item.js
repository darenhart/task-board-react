import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ContextTasks } from './board';
import colors from './colors';
import { borderRadius, grid } from './constants';

const Card = styled.div`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  background-color: ${colors.N0};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : 'none'};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: 40px;
  margin-bottom: ${grid}px;
  user-select: none;
  text-decoration: none;
  position: relative;
  overflow-wrap: break-word;

  /* anchor overrides */
  color: ${colors.N900};

  &:hover,
  &:active {
    color: ${colors.N900};
  }

  &:hover {
    button {
      display: block;
    }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Content = styled.div``;

const EditButton = styled.button`
  position: absolute;
  right: 0px;
  display: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  float: right;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  outline: none;
  height: 80px;
  resize: none;
`;

const Background = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: ${colors.DN400A};
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
`;

const EditArea = styled.div`
  z-index: 1010;
  position: absolute;
  width: 250px;
`;

const Button = styled.button`
  background-color: ${colors.GG250};
  color: ${colors.N0};
  border-radius: 5px;
  border: none;
  padding: ${grid}px 20px;
  margin-right: ${grid}px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.GG220};
  }
`;

function getStyle(provided, style) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

const TaskItem = (props) => {
  const {
    task,
    isDragging,
    isGroupedOver,
    provided,
    style,
    isClone,
    index,
  } = props;

  const [, dispatch] = useContext(ContextTasks);

  const [editing, setEditing] = useState(task.isNew);
  const [newText, setText] = useState(task.content);

  const save = () => {
    dispatch({ type: 'EDIT_TASK', taskId: task.id, value: newText });
    setEditing(false);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      save();
    }
    if (e.keyCode === 27) {
      e.preventDefault();
      setEditing(false);
    }
  };

  const EditingContainer = (
    <>
      <Background onClick={() => setEditing(false)} />
      <EditArea>
        <Card>
          <Textarea
            autoFocus
            onKeyDown={onEnterPress}
            value={newText}
            onChange={(e) => setText(e.target.value)}
          ></Textarea>
        </Card>
        <div>
          <Button onClick={() => save()}>Save</Button>
          <Button
            onClick={() => {
              dispatch({ type: 'DELETE', taskId: task.id });
            }}
          >
            Remove
          </Button>
        </div>
      </EditArea>
    </>
  );

  return (
    <>
      {editing && EditingContainer}
      <Card
        isDragging={isDragging}
        isGroupedOver={isGroupedOver}
        isClone={isClone}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getStyle(provided, style)}
        data-is-dragging={isDragging}
        data-testid={task.id}
        data-index={index}
      >
        <EditButton
          onClick={() => {
            setEditing(true);
          }}
        >
          EDIT
        </EditButton>
        <Content>{task.content}</Content>
      </Card>
    </>
  );
};

export default React.memo(TaskItem);
