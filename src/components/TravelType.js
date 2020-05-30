import React from 'react';
import styled from 'styled-components';

const TravelType = ({ travelType }) => {
	return (
		<TravelTypeWrapper>
			<TravelTypeImgWrapper
				src={require(`../Imgs/ticket_icons/traveltype_background.png`)}
				alt=''
			/>
			<TypeTextImgWrapper
				// src={require(`../Imgs/여행자_유형/개척자.png`)}
				src={require(`../Imgs/여행자_유형/${travelType}.png`)}
				alt=''
			/>
		</TravelTypeWrapper>
	);
};

const TravelTypeWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 38%;
	justify-content: center;
`;

const TravelTypeImgWrapper = styled.img`
	display: flex;
	position: absolute;
	width: 94%;
`;

const TypeTextImgWrapper = styled.img`
	z-index: 1;
	width: 82%;
	height: 42%;
	display: flex;
	align-self: flex-start;
	position: absolute;
	bottom: 120px;
`;

export default TravelType;
