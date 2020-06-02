import React, { useContext } from 'react';
import styled from 'styled-components';
import PageContext from '../contexts/Page.context';
import { mockData } from '../mockData';

const Intro = () => {
	const { setPageCount } = useContext(PageContext);
	const { text } = mockData[0];
	return (
		<IntroOuterWrapper>
			<NoteOuterWrapper data-testid='card'>
				<NoteImgWrapper
					src={require('../Imgs/ticket_icons/traveltype_background.png')}
					alt=''
				/>
				<TextOuterWrapper>{text}</TextOuterWrapper>
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
