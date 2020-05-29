import React, { useContext } from 'react';
import styled from 'styled-components';
import PageContext from '../contexts/Page.context';

const Result = () => {
	const {
		date,
		userInput: { prefix, username },
	} = useContext(PageContext);
	const nameWithPrefix = `${prefix} ${username}`;
	return (
		<TicketOuterWrapper>
			<TicketWrapper>
				<TicketImgWrapper
					src={require(`../Imgs/ticket_icons/ticket_background.png`)}
					alt=''
				/>
			</TicketWrapper>
			<TicketTextOuterWrapper>
				<TicketTextWrapper>{nameWithPrefix}</TicketTextWrapper>
				<TicketTextWrapper>여행 프로파일러</TicketTextWrapper>
				<TicketTextWrapper>{date}</TicketTextWrapper>
			</TicketTextOuterWrapper>
		</TicketOuterWrapper>
	);
};

const TicketOuterWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const TicketWrapper = styled.div`
	display: flex;
	transform: rotate(-90deg);
	width: 38%;
	align-self: center;
	position: absolute;
	top: -70px;
`;

const TicketImgWrapper = styled.img`
	display: flex;
	width: 100%;
`;

const TicketTextOuterWrapper = styled.div`
	z-index: 1;
	flex-direction: column;
	position: absolute;
	width: 45%;
	padding-left: 23%;
	align-self: flex-end;
	padding-bottom: 40px;
`;

const TicketTextWrapper = styled.div`
	font-size: 10px;
	color: black;
	margin-top: 13px;
`;

export default Result;
