import React from 'react';
import styled from 'styled-components';
import colors from './colors';
import { borderRadius, grid } from './constants';

const Container = styled.div`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: blue;
  background-color: ${colors.N0};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.N70}` : 'none'};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: 40px;
  margin-bottom: ${grid}px;
  user-select: none;
  text-decoration: none;

  /* anchor overrides */
  color: ${colors.N900};

  &:hover,
  &:active {
    color: ${colors.N900};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`;

const Content = styled.div`
  /* flex child */
  flex-grow: 1;

  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;

  /* flex parent */
  display: flex;
  flex-direction: column;
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

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
function QuoteItem(props) {
  const {
    quote,
    isDragging,
    isGroupedOver,
    provided,
    style,
    isClone,
    index,
  } = props;

  return (
    <Container
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      isClone={isClone}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided, style)}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
    >
      <Content>
        <div>{quote.content}</div>
      </Content>
    </Container>
  );
}

export default React.memo(QuoteItem);
