import React from 'react';
import styled from 'styled-components';

const TravelType = ({ lang, travelType }) => {
	const travelType_lang =
		lang === 'KOR'
			? require(`../Imgs/여행자_유형/${travelType}.png`)
			: require(`../Imgs/여행자_유형_영문/${travelType}_en.png`);
	return (
		<TravelTypeWrapper>
			<TravelTypeImgWrapper
				src={require(`../Imgs/ticket_icons/traveltype_background.png`)}
				alt=''
			/>
			<TypeTextImgWrapper src={travelType_lang} alt='' />
				<a href='https://test1.promxr.com' target='blank'>
					<PromTestLinkImgWrapper
					src={require(`../Imgs/ticket_icons/promTestLink.png`)}
					alt=''
					/>
				</a>
			{/* <a href='https://www.facebook.com/travelmondayofficial' target='blank'>
				<StampImgWrapper
					src={require(`../Imgs/ticket_icons/stamp.png`)}
					alt=''
				/>
			</a> */}
		</TravelTypeWrapper>
	);
};

const TravelTypeWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 38%;
	justify-content: center;
	align-items: center;
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

const BannerWrapper = styled.img`
	display: flex;
	z-index: 1;
	position: absolute;
	width: 20%;
	bottom: 0%;
	right: 6%;
`;
const PromTestLinkImgWrapper = styled.img`
	display: flex;
	z-index: 1;
	position: absolute;
	width: 40%;
	bottom: 7%;
	right: 6%;
`;

const GhibriTestLinkImgWrapper = styled.img`
	display: flex;
	z-index: 1;
	position: absolute;
	width: 40%;
	bottom: -10%;
	right: 6%;
`;


export default TravelType;
