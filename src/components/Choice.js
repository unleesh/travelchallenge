import React, { useState, useCallback, useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

const Choice = ({ choice, index }) => {
	// sets the color of choice when it's clicked.
	const [choiceColor, setChoiceColor] = useState('rgba(29, 188, 165, 1)');
	const { setPageCount, addUserChoice } = useContext(PageContext);
	const onChoiceClick = debounce(() => {
		setChoiceColor('rgba(249, 180, 56, 1)');
		addUserChoice(index);
		setPageCount();
	}, 100);
	return (
		<ChoiceWrapper choiceColor={choiceColor} onClick={onChoiceClick}>
			{choice}
		</ChoiceWrapper>
	);
};

const ChoiceWrapper = styled.div`
	margin-bottom: 1.5em;
	border-radius: 15px;
	border-top: 1px solid #148776;
	border-left: 1px solid #148776;
	border-top-width: 3.5px;
	border-left-width: 3.5px;
	background-color: ${(props) => props.choiceColor || 'rgba(29, 188, 165, 1)'};
	width: 100%;
	padding: 10px 20px;
	font-size: 18px;
`;

export default Choice;
