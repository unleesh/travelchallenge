import React, { useContext } from 'react';
import styled from 'styled-components';
import PageContext from '../contexts/Page.context';

const Result = () => {
	const {
		date,
		userInput: { title, username },
		travelType,
		country,
	} = useContext(PageContext);
	const nameWithTitle = `${title} ${username}`;
	const icon = country === 'usa2' ? 'usa' : country;
	return (
		<TicketOuterWrapper>
			<TicketWrapper>
				<TicketImgWrapper
					src={require(`../Imgs/ticket_icons/ticket_background.png`)}
					alt=''
				/>
			</TicketWrapper>
			<CountryTextOuterWrapper>
				<CountryTextImgWrapper
					src={require(`../Imgs/destinations/${country}.png`)}
					alt=''
				/>
			</CountryTextOuterWrapper>
			<IconNationOuterWrapper>
				<IconNationWrapper
					src={require(`../Imgs/icon_nation/worldicon.png`)}
					alt=''
				/>
				<IconNationWrapper
					src={require(`../Imgs/icon_nation/${icon}_.png`)}
					alt=''
				/>
			</IconNationOuterWrapper>
			<TicketTextOuterWrapper name={nameWithTitle.length}>
				<TicketTextWrapper name={nameWithTitle.length}>
					{nameWithTitle}
				</TicketTextWrapper>
				<TicketTextWrapper>{travelType}</TicketTextWrapper>
				<TicketTextWrapper>{date}</TicketTextWrapper>
			</TicketTextOuterWrapper>
			<LandmarkOuterWrapper>
				<LandmarkImgWrapper
					src={require(`../Imgs/landmarks/${country}.png`)}
					alt=''
				/>
			</LandmarkOuterWrapper>
		</TicketOuterWrapper>
	);
};

const TicketOuterWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 26%;
	font-family: 'AxiaStencilLight';
`;

const TicketWrapper = styled.div`
	display: flex;
	transform: rotate(90deg);
	position: absolute;
	align-self: flex-end;
	max-width: 40%;
	max-height: 55%;
`;

const CountryTextOuterWrapper = styled.div`
	display: flex;
	align-self: center;
	position: absolute;
	z-index: 1;
	width: 55%;
	height: 7%;
	align-self: start;
	left: 6%;
	top: 13%;
`;

const CountryTextImgWrapper = styled.img`
	display: flex;
	width: 55%;
	height: 100%;
`;

const IconNationOuterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	z-index: 1;
	position: absolute;

	width: 105px;
	height: 19px;
	justify-content: space-between;
	left: 6%;
	margin-top: 6%;
`;

const IconNationWrapper = styled.img`
	width: 15%;
`;

const TicketImgWrapper = styled.img`
	display: flex;
	width: 100%;
`;

const TicketTextOuterWrapper = styled.div`
	z-index: 1;
	flex-direction: column;
	position: absolute;
	width: 30%;
	text-align: center;
	margin-left: 32px;
	top: ${(props) => (props.name > 20 ? '71px' : '67px')};
`;

const TicketTextWrapper = styled.div`
	font-size: ${(props) => {
		if (props.name > 25) {
			return '6px';
		} else if (props.name > 20) {
			return '8px';
		} else {
			return '10px';
		}
	}};
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
	width: 20%;
	height: 20%;
	margin-right: 18px;
	margin-bottom: 2%;
`;

const PromOuterWrapper = styled.div`
	display: flex;
	align-self: center;
	position: absolute;
	z-index: 1;
	padding-bottom: 10%;
	justify-content: flex-end;
`;

const PromImgWrapper = styled.img`
	display: flex;
	width: 20%;
	height: 20%;
	margin-right: 18px;
	margin-bottom: 2%;
`;

export default Result;
