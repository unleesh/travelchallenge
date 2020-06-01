import React, { useContext } from 'react';
import airplane from '../Imgs/svg/airplane.svg';
import bottom from '../Imgs/svg/bottom.svg';
import covid19 from '../Imgs/svg/covid19.svg';
import travelmonday from '../Imgs/svg/travelmonday.png';
import styled from 'styled-components';
import PageContext from '../contexts/Page.context';

const Start = () => {
	const { setPageCount } = useContext(PageContext);
	return (
		<SVGWrapper onClick={() => setPageCount()}>
			<CovidWrapper src={covid19} alt='' />
			<TravelWrapper src={travelmonday} alt='' />
			<BottomSVGWrapper>
				<AirplaneWrapper src={airplane} alt='' />
				<BottomWrapper src={bottom} alt='' />
			</BottomSVGWrapper>
		</SVGWrapper>
	);
};

const SVGWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const BottomSVGWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const CovidWrapper = styled.img`
	z-index: 1;
	display: flex;
	position: absolute;
	width: 16%;
	left: 23px;
	top: 30px;
}
`;

const TravelWrapper = styled.img`
	z-index: 1;
	width: 35%;
	align-self: flex-end;
	position: absolute;
	right: 20px;
	bottom: 50%;
`;

const AirplaneWrapper = styled.img`
	z-index: 1;
	width: 67%;
	position: absolute;
	bottom: 22%;
	left: 0px;
`;

const BottomWrapper = styled.img`
	z-index: 1;
	position: absolute;
	width: 100%;
	bottom: 0px;
	left: 0px;
`;
export default Start;
