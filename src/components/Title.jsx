import React from 'react';
import MagicWandIcon from './MagicWand';
import styled from 'styled-components';

const Title = ({ randomField, resetGame, isEmpty, isResultShowed }) => (
  <StyledTitle>
    <span> Билет 1 </span>

    <Button isVisible={!isEmpty || isResultShowed} onClick={resetGame}>
      {' '}
      Очистить{' '}
    </Button>

    <MagicWand onClick={randomField}>
      <MagicWandIcon />
    </MagicWand>
  </StyledTitle>
);

export default Title;

const StyledTitle = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 2px;
  visibility: ${props => (props.isVisible ? 'visible ' : 'hidden')};
`;
const MagicWand = styled.div`
  cursor: pointer;
`;
