import React from 'react';
import styled from 'styled-components';
import { mockData } from '../mockData';

/* 각 질문의 카운트가 될 currentPage,
 ** 각 질문과 선택지를 담은 배열 혹은 객체가 있다면 currentPage 로 해당 문제를 출력
 ** 해당 질문에 속한 선택지들을 map
 ** 선택을 해야 isSelected로 인해 버튼 클릭 가능
 */
const Question = ({
	currentPage,
	setPageCount,
	isSelected,
	setBtnState,
	btnColor,
}) => {
	const { question, choices } = mockData[currentPage];
	console.log(currentPage, isSelected, btnColor);
	return (
		<div>
			<div>Question {currentPage}</div>
			<div>{question}</div>
			<ul>
				{choices.map((choice) => (
					<li key={`${currentPage}_${choice}`} onClick={() => setBtnState()}>
						{currentPage}_{choice}
					</li>
				))}
			</ul>
			<Button
				disabled={isSelected ? false : true}
				btnColor={btnColor}
				onClick={() => setPageCount()}>
				NEXT
			</Button>
		</div>
	);
};

const Button = styled.button`
	padding: 10px 15px;
	margin: 0 5px;
	border: none;
	border-radius: 5px;
	// need to be fixed to change color when the btn is clicked
	background-color: ${(props) => props.btnColor || 'blue'};
	color: #ffffff;
	font-size: 15pt;
`;

export default Question;
