import React, { Component } from 'react';
import styled from 'styled-components';
import Column from './column';
import colors from './colors';
import { reorderTaskMap } from './reorder';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  background-color: ${colors.B100};
  min-height: 100vh;
  min-width: 100vw;
  display: inline-flex;
`;

export default class Board extends Component {
  static defaultProps = {
    isCombineEnabled: false,
  };

  state = {
    columns: this.props.initial,
    ordered: Object.keys(this.props.initial),
  };

  onDragEnd = (result) => {
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
      taskMap: this.state.columns,
      source,
      destination,
    });

    this.setState({
      columns: data.taskMap,
    });
  };

  render() {
    const columns = this.state.columns;
    const ordered = this.state.ordered;

    const board = (
      <Droppable droppableId="board" direction="horizontal">
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                title={key}
                quotes={columns[key]}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    );

    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>{board}</DragDropContext>
      </React.Fragment>
    );
  }
}
