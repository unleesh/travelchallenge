import React from 'react';
import Choice from './Choice';
import styled from 'styled-components';
import { mockData } from '../mockData';

/* 각 질문의 카운트가 될 currentPage,
 ** 각 질문과 선택지를 담은 배열 혹은 객체가 있다면 currentPage 로 해당 문제를 출력
 ** 해당 질문에 속한 선택지들을 map
 ** 선택을 해야 isSelected로 인해 버튼 클릭 가능
 */
const Question = ({ currentPage, selectedChoices }) => {
	const { question, choices } = mockData[currentPage];
	return (
		<QuestionPageWrapper>
			<QuestionWrapper>{question}</QuestionWrapper>
			<ChoicesWrapper>
				{choices.map((choice, index) => (
					<Choice
						key={`${currentPage}_${index}`}
						currentPage={currentPage}
						choice={choice}
						index={index}
					/>
				))}
			</ChoicesWrapper>
			{/* 임시 퀘스천 카운터 */}
			<QuestionCounter>{currentPage}/14</QuestionCounter>
		</QuestionPageWrapper>
	);
};

const QuestionPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 20px;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const QuestionWrapper = styled.div`
	align-self: center;
	position: absolute;
	top: 10%;
	width: 100%;
	font-size: 20px;
	text-align: center;
`;

const ChoicesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 20%;
`;

const QuestionCounter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: 15px;
	position: absolute;
	bottom: 15%;
}
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
