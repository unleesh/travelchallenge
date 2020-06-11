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
	margin: auto;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	align-self: center;
	overflow: visible;
	border-radius: 15px;
	box-shadow: 7px 7px 10px #222;
	background-color: rgba(29, 188, 165, 1);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-y: scroll;
	@media (max-width: 500px) {
		margin: 60px auto 200px auto;
		padding-bottom: 120px auto;
	}
`;

export const TextWrapper = styled.div`
	font-family: 'Jua', sans-serif;
	font-size: 12px;
	text-align: center;
	color: black;
	margin: 2px 0px 2px 0px;
`;

export const HighlightTextWrapper = styled.span`
	font-size: 14px;
	text-align: center;
	color: black;
	font-weight: bold;
	border: ${(props) =>
		props.border === true
			? '1px solid rgba(249,180,56,1)'
			: '1px solid transparent'};
	background-color: ${(props) =>
		props.border === true ? 'rgba(249,180,56,100)' : ''};
	padding: 0px 2px 0px 2px;
`;

export const QuestionTitleWrapper = styled.div`
	font-size: 20px;
	font-family: 'Jua', sans-serif;
`;

export const VerificationTitleWrapper = styled.div`
	font-size: 17px;
	font-family: 'Jua', sans-serif;
`;

export const QuestionTextWrapper = styled.div`
	font-size: 18px;
`;

export const EmailInfoWrapper = styled.div`
	font-size: 12px;
	font-family: 'Jua', sans-serif;
	margin-top: 10px;
`;
