import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Field from '../components/Field';
import Title from '../components/Field';
import Result from '../components/Result';

import { randomSeveralNumbers, isOverlapping } from '../utils';
import constants  from '../constants';

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
	const [firstFieldSelected, setFirstFieldSelected] = useState([])
	const [secondFieldSelected, setSecondFieldSelected ] = useState([])
	const [isResultShowed, setResultShowed ] = useState(false)
	const [win, setWin ] = useState(false)

	const isEmpty = !firstFieldSelected.length && !secondFieldSelected.length

	const randomField = () => {
		setFirstFieldSelected(randomSeveralNumbers(FIRST_FIELD_AMOUNT, FIRST_FIELD_SELECTED_AMOUNT))
		setSecondFieldSelected(randomSeveralNumbers(SECOND_FIELD_AMOUNT, SECOND_FIELD_SELECTED_AMOUNT))
	}

	const showResult = () => {
		const finalFirstFieldSelected = randomSeveralNumbers(FIRST_FIELD_AMOUNT, FIRST_FIELD_SELECTED_AMOUNT)
		const finalSecondFieldSelected = randomSeveralNumbers(SECOND_FIELD_AMOUNT, SECOND_FIELD_SELECTED_AMOUNT)
		
		if (
			isOverlapping(finalFirstFieldSelected, firstFieldSelected, FIRST_WINNING_SITUATION_FIRST_FIELD_SELECTED) || 
			(
				isOverlapping(finalFirstFieldSelected, firstFieldSelected, SECOND_WINNING_SITUATION_FIRST_FIELD_SELECTED) && 
				isOverlapping(finalSecondFieldSelected, secondFieldSelected, SECOND_WINNING_SITUATION_SECOND_FIELD_SELECTED)
			)
		) {
			setWin(true)
		}
		setResultShowed(true);
	}

	const resetGame = () => {
		setResultShowed(false)
		setWin(false)
		setFirstFieldSelected([])
		setSecondFieldSelected([])
	}
  return (
		<>
			<GlobalStyle />
			<Container>
				<Game>
					<Title
						{...{isResultShowed, randomField, resetGame, isEmpty}}
					/>
					{isResultShowed ? 
						<Result win={win}/> :
						<>
							<Field 
								name="Поле 1" 
								text="Отметьте 8 чисел." 
								fieldAmount={FIRST_FIELD_AMOUNT} 
								fieldSelectedAmount={FIRST_FIELD_SELECTED_AMOUNT}
								selectedfields={firstFieldSelected}
								setSelectedfields={setFirstFieldSelected}
							/>
							<Field 
								name="Поле 2" 
								text="Отметьте 1 число." 
								fieldAmount={SECOND_FIELD_AMOUNT} 
								fieldSelectedAmount={SECOND_FIELD_SELECTED_AMOUNT}
								selectedfields={secondFieldSelected}
								setSelectedfields={setSecondFieldSelected}
							/>
						<ShowResult onClick={showResult}> Показать результат </ShowResult>
						</>
					}
				</Game>
			</Container>
		</>
 )
}

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
`

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(180deg, #4568DC 0%, #B06AB3 100%), #EF8E48;
	display: flex;
	justify-content: center;
	padding-top: 20px;
`

const Game = styled.div`
	max-width: 400px;
	max-width: 100%;
	max-height: 368px;
	border-radius: 3px;
	padding: 16px 14px;
	background: white;
`

const ShowResult = styled.div`
 	border: 1px solid rgba(0, 0, 0, .16);
	border-radius: 40px;
	padding: 13px 26px;
`