import React from 'react';
import Country from './Country';
import { mockData_KOR, mockData_ENG, mockCountries } from '../mockData';
import styled from 'styled-components';

const CountrySelection = ({ setPageCount, lang }) => {
	// 뒤의 조건은 영어로 변경 필요
	const { text } = lang === 'KOR' ? mockData_KOR[15] : mockData_ENG[15];

	return (
		<CountrySelectionWrapper>
			<CountryTitleWrapper>{text}</CountryTitleWrapper>
			<CountriesWrapper>
				{mockCountries.map((mockCountry) => (
					<Country key={mockCountry.abvName} {...mockCountry} />
				))}
			</CountriesWrapper>
			<Button onClick={() => setPageCount()}>Send</Button>
		</CountrySelectionWrapper>
	);
};

const CountrySelectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: auto;
	font-family: 'Jua', sans-serif;
`;

const CountryTitleWrapper = styled.div`
	align-self: center;
	width: 100%;
	margin: 20px 0px 20px 0px;
`;

const CountriesWrapper = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: center;
`;

const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background-color: white;
	color: rgba(29, 188, 165, 1);
	font-family: 'AxiaStencilLight';
	font-size: 1em;
	margin: 5% auto 10%;
	display: block;
	width: 25%;
	border-radius: 20px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
`;

export default CountrySelection;
