import React from 'react';
import Choice from './Choice';
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
	const onClickChoice = () => {
		setBtnState();
		setTimeout(() => {
			setPageCount();
		}, 2000);
	};
	return (
		<QuestionPageWrapper>
			{/* <div>Question {currentPage}</div> */}
			<QuestionWrapper>{question}</QuestionWrapper>
			<div>
				{choices.map((choice) => (
					// <ChoiceWrapper
					// 	key={`${currentPage}_${choice}`}
					// 	onClick={() => click()}
					// 	btnColor={btnColor}>
					// 	{currentPage}_{choice}
					// </ChoiceWrapper>
					<Choice
						key={`${currentPage}_${choice}`}
						click={onClickChoice}
						currentPage={currentPage}
						btnColor={btnColor}
						choice={choice}
					/>
				))}
			</div>
			{/* <Button
				disabled={isSelected ? false : true}
				btnColor={btnColor}
				onClick={() => setPageCount()}>
				NEXT
			</Button> */}
		</QuestionPageWrapper>
	);
};

const QuestionPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const QuestionWrapper = styled.div`
	align-self: center;
	position: absolute;
	top: 3em;
`;

// const Button = styled.button`
// 	padding: 10px 15px;
// 	margin: 0 5px;
// 	border: none;
// 	border-radius: 5px;
// 	// need to be fixed to change color when the btn is clicked
// 	background-color: ${(props) => props.btnColor || 'blue'};
// 	color: #ffffff;
// 	font-size: 15pt;
// `;

export default Question;
