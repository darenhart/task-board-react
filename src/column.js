import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { grid, borderRadius } from './constants';
import QuoteList from './quote-list';

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) =>
    isDragging ? '#E3FCEF' : '#EBECF0'};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #E3FCEF;
  }
`;

export default class Column extends Component {
  render() {
    const title = this.props.title;
    const quotes = this.props.quotes;
    const index = this.props.index;
    return (
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <Container ref={provided.innerRef} {...provided.draggableProps}>
            <Header isDragging={snapshot.isDragging}>
              
                {title}
            </Header>
            <QuoteList
              listId={title}
              listType="QUOTE"
              style={{
                backgroundColor: snapshot.isDragging ? '#E3FCEF' : null,
              }}
              quotes={quotes}
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