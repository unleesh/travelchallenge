import React, { useState, useCallback, useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';

const Choice = ({ currentPage, choice }) => {
	// sets the color of choice when it's clicked.
	const [choiceColor, setChoiceColor] = useState('rgba(29, 188, 165, 1)');
	const { setPageCount, addUserChoice } = useContext(PageContext);
	const onChoiceClick = useCallback(() => {
		setChoiceColor('rgba(249, 180, 56, 1)');
		addUserChoice(choice);
		setPageCount();
	}, [choice, addUserChoice, setPageCount]);
	return (
		<ChoiceWrapper choiceColor={choiceColor} onClick={onChoiceClick}>
			{currentPage}_{choice}
		</ChoiceWrapper>
	);
};

const ChoiceWrapper = styled.div`
	margin-bottom: 1.5em;
	border: 1px solid black;
	border-radius: 15px;
	padding: 0.8em 4.5em;
	background-color: ${(props) => props.choiceColor || 'rgba(29, 188, 165, 1)'};
`;

export default Choice;
