import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import colors from '../colors';
import { grid, borderRadius } from '../constants';
import TaskList from './task-list';

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${colors.N30};
  font-weight: 500;
`;

export default class Column extends Component {
  render() {
    const title = this.props.title;
    const tasks = this.props.tasks;
    const index = this.props.index;
    return (
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <Container ref={provided.innerRef} {...provided.draggableProps}>
            <Header isDragging={snapshot.isDragging} contentEditable>
              {title}
            </Header>
            <TaskList
              listId={title}
              listType="TASK"
              style={{
                backgroundColor: snapshot.isDragging ? colors.G50 : null,
              }}
              tasks={tasks}
              internalScroll={this.props.isScrollable}
              isCombineEnabled={Boolean(this.props.isCombineEnabled)}
              useClone={Boolean(this.props.useClone)}
            />
          </Container>
        )}
      </Draggable>
    );
  }
}
