import React, { useContext } from 'react';
import styled from 'styled-components';
import PageContext from '../contexts/Page.context';

const Result = () => {
	const {
		date,
		userInput: { prefix, username },
		travelType,
		country,
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
			{/* <LeftImgWrapper>
				<CountryTextOuterWrapper>
					<CountryTextImgWrapper
						src={require(`../Imgs/ticket_icons/france.png`)}
						// src={require(`../Imgs/ticket_icons/${country}.png`)}
						alt=''
					/>
				</CountryTextOuterWrapper>
				<IconNationOuterWrapper>
					<IconNationWrapper
						src={require(`../Imgs/icon_nation/korea_.png`)}
						alt=''
					/>
					<IconNationWrapper
						src={require(`../Imgs/icon_nation/france.png`)}
						// src={require(`../Imgs/icon_nation/${country}_.png`)}
						alt=''
					/>
				</IconNationOuterWrapper>
			</LeftImgWrapper> */}
			<CountryTextOuterWrapper>
				<CountryTextImgWrapper
					// src={require(`../Imgs/ticket_icons/thailand.png`)}
					src={require(`../Imgs/ticket_icons/${country}.png`)}
					alt=''
				/>
			</CountryTextOuterWrapper>
			<IconNationOuterWrapper>
				<IconNationWrapper
					src={require(`../Imgs/icon_nation/korea_.png`)}
					alt=''
				/>
				<IconNationWrapper
					// src={require(`../Imgs/icon_nation/usa.png`)}
					src={require(`../Imgs/icon_nation/${country}_.png`)}
					alt=''
				/>
			</IconNationOuterWrapper>
			<TicketTextOuterWrapper>
				<TicketTextWrapper>{nameWithPrefix}</TicketTextWrapper>
				<TicketTextWrapper>{travelType}</TicketTextWrapper>
				<TicketTextWrapper>{date}</TicketTextWrapper>
				{/* <TicketTextWrapper>Mr. Green</TicketTextWrapper>
				<TicketTextWrapper>텐션몰빵</TicketTextWrapper>
				<TicketTextWrapper>30 May 2020</TicketTextWrapper> */}
			</TicketTextOuterWrapper>
			<LandmarkOuterWrapper>
				<LandmarkImgWrapper
					// src={require(`../Imgs/ticket_icons/spain_landmark.png`)}
					src={require(`../Imgs/ticket_icons/${country}_landmark.png`)}
					alt=''
				/>
			</LandmarkOuterWrapper>
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

const LeftImgWrapper = styled.div`
	display: flex;
	flex-flow: wrap;
	position: absolute;
	z-index: 1;
	align-self: flex-end;
`;

const CountryTextOuterWrapper = styled.div`
	display: flex;
	align-self: center;
	position: absolute;
	z-index: 1;
	padding-bottom: 56%;

	// width: 90%;
	// margin-left: 7%;
	// margin-bottom: -8%;
`;

const CountryTextImgWrapper = styled.img`
	display: flex;
	width: 13%;
	transform: rotate(-90deg);
	margin-left: 3%;
`;

const IconNationOuterWrapper = styled.div`
	flex-direction: row;
	z-index: 1;
	position: absolute;
	margin-top: -67px;
	// padding-left: 8%;

	// margin-bottom: 13%;
	// width: 100%;
	// // margin-left: 2%;
`;

const IconNationWrapper = styled.img`
	width: 8%;
	// height: 19%;
	// margin-left: -5%;
	margin-right: 65px;
	margin-left: -6px;
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

const LandmarkOuterWrapper = styled.div`
	display: flex;
	align-self: center;
	position: absolute;
	z-index: 1;
	padding-bottom: 41%;
	justify-content: flex-end;
`;

const LandmarkImgWrapper = styled.img`
	display: flex;
	width: 14%;
	transform: rotate(-90deg);
	margin-right: 9%;
	margin-bottom: 3%;
`;

export default Result;
