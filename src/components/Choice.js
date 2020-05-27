import React from 'react';
import styled from 'styled-components';

const Choice = ({ currentPage, choice }) => {
	return (
		<ChoiceWrapper>
			{currentPage}_{choice}
		</ChoiceWrapper>
	);
};

const ChoiceWrapper = styled.div`
	margin-bottom: 1.5em;
	border: 1px solid black;
	border-radius: 15px;
	padding: 0.8em 4.5em;
	background-color: ${(props) => props.btnColor || 'blue'};
`;

export default Choice;
