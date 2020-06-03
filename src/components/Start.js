import React, { useContext } from 'react';
import airplane from '../Imgs/svg/airplane.svg';
import bottom from '../Imgs/svg/bottom.svg';
import nation from '../Imgs/gifs/nation.gif';
import covid19 from '../Imgs/svg/covid19.svg';
import travelmonday from '../Imgs/svg/travelmonday.png';
import styled from 'styled-components';
import PageContext from '../contexts/Page.context';

const Start = () => {
	// KOR/ENG 구분해줘야 함.
	const { setPageCount, setLang } = useContext(PageContext);
	const setLangOpt = (e) => {
		setLang(e.target.value);
		setPageCount();
	};
	return (
		<SVGWrapper>
			<CovidWrapper src={covid19} alt='' />
			<TravelWrapper src={travelmonday} alt='' />
			<BottomSVGWrapper>
				<AirplaneWrapper src={airplane} alt='' />
				<BottomWrapper src={bottom} alt='' />
				<BottomWrapper nation='nation' src={nation} alt='' />
				<StartBtnWrapper>
					<StartBtn value='KOR' onClick={(e) => setLangOpt(e)}>
						KOREAN
					</StartBtn>
					<StartBtn value='ENG' onClick={(e) => setLangOpt(e)}>
						ENGLISH
					</StartBtn>
				</StartBtnWrapper>
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
	height: ${(props) => (props.nation ? '65px' : '')};
`;

const StartBtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 4%;
	bottom: 15%;
	z-index: 1;
`;

const StartBtn = styled.button`
	/* Adapt the colors based on primary prop */
	background-color: rgba(249, 180, 56, 1);
	color: white;
	font-family: 'AxiaStencilLight';
	font-size: 0.5em;
	margin: 5% auto 10%;
	padding: 5px 10px 5px 10px;
	display: flex;
	width: 100%;
	border-radius: 20px;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export default Start;
