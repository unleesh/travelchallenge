import styled from 'styled-components';

export const AppContainer = styled.div`
	width: 100%;
	background-color: rgba(249, 180, 56, 1);
	display: flex;
	justify-content: center;
`;

export const CardContainer = styled.div`
	position: absolute;
	width: 336.128px;
	height: 575.291px;
	top: 120.432px;
	overflow: visible;
	border-radius: 15px;
	box-shadow: 7px 7px 10px #222;
	background-color: rgba(29, 188, 165, 1);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-y: scroll;
`;

export const QuestionTitleWrapper = styled.div`
	font-size: 16px;
`;

export const QuestionTextWrapper = styled.div`
	font-size: 14px;
`;
