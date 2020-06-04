import React, { useState, useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';

const Choice = ({ choice, index }) => {
	// sets the color of choice when it's clicked.
	const [choiceColor, setChoiceColor] = useState('rgba(29, 188, 165, 1)');
	const { setPageCount, addUserChoice, disabled } = useContext(PageContext);
	const onChoiceClick = () => {
		setChoiceColor('rgba(249, 180, 56, 1)');
		addUserChoice(index);
		setPageCount();
	};
	return (
		<ChoiceWrapper
			disabled={disabled}
			choiceColor={choiceColor}
			onClick={onChoiceClick}>
			{choice}
		</ChoiceWrapper>
	);
};

const ChoiceWrapper = styled.button`
	margin-bottom: 1.5em;
	border-radius: 15px;
	border-top: 1px solid #148776;
	border-left: 1px solid #148776;
	border-top-width: 3.5px;
	border-left-width: 3.5px;
	background-color: ${(props) => props.choiceColor || 'rgba(29, 188, 165, 1)'};
	width: 100%;
	padding: 10px 15px;
	font-family: 'Jua', sans-serif;
	font-size: 18px;
	outline: none;
`;

export default Choice;
