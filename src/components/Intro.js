import React, { useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';

const Intro = () => {
	const { setPageCount } = useContext(PageContext);
	return (
		<IntroOuterWrapper>
			<NoteOuterWrapper data-testid='card'>
				<NoteImgWrapper
					src={require('../Imgs/ticket_icons/traveltype_background.png')}
					alt=''
				/>
				<TextOuterWrapper>
					<TextWrapper>안녕하십니까 승객 여러분</TextWrapper>
					<TextWrapper>코로나로 여행을 못 가셔서 답답하시죠?</TextWrapper>
					<br />
					<TextWrapper>그래서 저희가 코로나 이후</TextWrapper>
					<TextWrapper>여행을 준비하시는데 도움이 되고자</TextWrapper>
					<TextWrapper>주요 도시를 가상 여행하며 알 수 있는</TextWrapper>
					<TextWrapper>
						<HighlightTextWrapper>여행 성향 테스트</HighlightTextWrapper> 를
						준비했습니다.
					</TextWrapper>
					<br />
					<TextWrapper>
						본인의{' '}
						<HighlightTextWrapper border>여행성향 유형</HighlightTextWrapper>을
						확인하고,
					</TextWrapper>
					<TextWrapper>
						<HighlightTextWrapper border>추천 목적지</HighlightTextWrapper>를
						확인해보세요.
					</TextWrapper>
				</TextOuterWrapper>
			</NoteOuterWrapper>
			<ButtonWrapper onClick={setPageCount}>Start</ButtonWrapper>
		</IntroOuterWrapper>
	);
};

const IntroOuterWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const NoteOuterWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const NoteImgWrapper = styled.img`
	display: flex;
	position: absoulte;
	width: 80%;
	height: 80%;
`;

const TextOuterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	width: 72%;
	position: absolute;
	z-index: 1;
`;

const TextWrapper = styled.div`
	font-size: 12px;
	text-align: center;
	color: black;
	margin: 2px 0px 2px 0px;
`;

const HighlightTextWrapper = styled.span`
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

const ButtonWrapper = styled.button`
	width: 25%;
	display: flow-root;
	align-self: flex-end;
	margin: 35px 20px 0px 0px;
	border-radius: 20px;
	background-color: white;
	color: rgba(29, 188, 165, 1);
`;

export default Intro;
