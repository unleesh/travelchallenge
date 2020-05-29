import React, { useState, useCallback, useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';

const Choice = ({ choice, index }) => {
	// sets the color of choice when it's clicked.
	const [choiceColor, setChoiceColor] = useState('rgba(29, 188, 165, 1)');
	const { setPageCount, addUserChoice } = useContext(PageContext);
	const onChoiceClick = useCallback(() => {
		setChoiceColor('rgba(249, 180, 56, 1)');
		addUserChoice(index);
		setPageCount();
	}, [index, addUserChoice, setPageCount]);
	return (
		<ChoiceWrapper choiceColor={choiceColor} onClick={onChoiceClick}>
			{choice}
		</ChoiceWrapper>
	);
};

const ChoiceWrapper = styled.div`
	margin-bottom: 1.5em;
	border: 1px solid #148776;
	border-radius: 15px;
	border-top-width: medium;
	border-left-width: medium;
	// padding: 0.8em 4.5em;
	background-color: ${(props) => props.choiceColor || 'rgba(29, 188, 165, 1)'};
	width: 100%;
	padding: 10px 20px;
	font-size: 18px;
`;

export default Choice;
