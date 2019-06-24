import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Field from '../components/Field';
import Title from '../components/Title';
import Result from '../components/Result';
import { randomSeveralNumbers, isOverlapping } from '../utils';
import constants from '../constants';

const {
  FIRST_FIELD_AMOUNT,
  FIRST_FIELD_SELECTED_AMOUNT,
  SECOND_FIELD_AMOUNT,
  SECOND_FIELD_SELECTED_AMOUNT,
  FIRST_WINNING_SITUATION_FIRST_FIELD_SELECTED,
  SECOND_WINNING_SITUATION_FIRST_FIELD_SELECTED,
  SECOND_WINNING_SITUATION_SECOND_FIELD_SELECTED
} = constants;

const App = () => {
  const [firstFieldSelected, setFirstFieldSelected] = useState([]);
  const [secondFieldSelected, setSecondFieldSelected] = useState([]);
  const [isResultShowed, setResultShowed] = useState(false);
  const [win, setWin] = useState(false);

  const isEmpty = !firstFieldSelected.length && !secondFieldSelected.length;
  const isCompleted =
    firstFieldSelected.length === FIRST_FIELD_SELECTED_AMOUNT &&
    secondFieldSelected.length === SECOND_FIELD_SELECTED_AMOUNT;

  const randomField = () => {
    setResultShowed(false);
    setWin(false);
    setFirstFieldSelected(
      randomSeveralNumbers(FIRST_FIELD_AMOUNT, FIRST_FIELD_SELECTED_AMOUNT)
    );
    setSecondFieldSelected(
      randomSeveralNumbers(SECOND_FIELD_AMOUNT, SECOND_FIELD_SELECTED_AMOUNT)
    );
  };

  const showResult = () => {
    const finalFirstFieldSelected = randomSeveralNumbers(
      FIRST_FIELD_AMOUNT,
      FIRST_FIELD_SELECTED_AMOUNT
    );
    const finalSecondFieldSelected = randomSeveralNumbers(
      SECOND_FIELD_AMOUNT,
      SECOND_FIELD_SELECTED_AMOUNT
    );

    if (isOverlapping(
        finalFirstFieldSelected,
        firstFieldSelected,
        FIRST_WINNING_SITUATION_FIRST_FIELD_SELECTED) ||
      (isOverlapping(
        finalFirstFieldSelected,
        firstFieldSelected,
        SECOND_WINNING_SITUATION_FIRST_FIELD_SELECTED
      ) &&
        isOverlapping(
          finalSecondFieldSelected,
          secondFieldSelected,
          SECOND_WINNING_SITUATION_SECOND_FIELD_SELECTED
        ))
    ) {
      setWin(true);
    }
    setResultShowed(true);
  };

  const resetGame = () => {
    setResultShowed(false);
    setWin(false);
    setFirstFieldSelected([]);
    setSecondFieldSelected([]);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Game>
          <Title {...{ isResultShowed, randomField, resetGame, isEmpty }} />
          {isResultShowed ? (
            <Result win={win} />
          ) : (
            <>
              <Field
                name="Поле 1"
                text="Отметьте 8 чисел."
                fieldAmount={FIRST_FIELD_AMOUNT}
                fieldSelectedMaxAmount={FIRST_FIELD_SELECTED_AMOUNT}
                selectedfields={firstFieldSelected}
                setSelectedfields={setFirstFieldSelected}
              />
              <Field
                name="Поле 2"
                text="Отметьте 1 число."
                fieldAmount={SECOND_FIELD_AMOUNT}
                fieldSelectedMaxAmount={SECOND_FIELD_SELECTED_AMOUNT}
                selectedfields={secondFieldSelected}
                setSelectedfields={setSecondFieldSelected}
              />
              <ShowResult
                {...{ isCompleted }}
                onClick={isCompleted ? showResult : null}
              >
                Показать результат
              </ShowResult>
            </>
          )}
        </Game>
      </Container>
    </>
  );
};

export default App;

// Styles
const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 20px;
  }
`;

const Container = styled.div`
  background: linear-gradient(180deg, #4568dc 0%, #b06ab3 100%), #ef8e48;
  display: flex;
  justify-content: center;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Game = styled.div`
  min-height: 400px;
  width: 100%;
  border-radius: 3px;
  padding: 16px 14px;
  background: white;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

const ShowResult = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 40px;
  padding: 13px 26px;
  display: inline-block;
  cursor: ${props => (props.isCompleted ? 'pointer' : 'not-allowed')};
  margin: auto;
  margin-bottom: 12px;
`;
