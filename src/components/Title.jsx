import React from 'react';
import MagicWand from './MagicWand';
import styled from 'styled-components';

const Title = ({randomField, isResultShowed, resetGame, isEmpty}) => (
  <StyledTitle>
    <span> Билет 1 </span> 

    {isEmpty && <Button onClick={resetGame}> Очистить </Button> }

    {isResultShowed && 
      <div onClick={randomField}>
        <MagicWand/>
      </div>
    }
  </StyledTitle>
)

export default Title;

const StyledTitle = styled.div`
	margin-bottom: 12px;
	font-size: 16px;
  line-height: 22px;
  display: flex;
	justify-content: space-between;
`

const Button = styled.div`
	border-radius: 3px;
  cursor: pointer;
`