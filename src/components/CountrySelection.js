import React from 'react';
import Country from './Country';
import { mockCountries } from '../mockData';
import styled from 'styled-components';

const CountrySelection = ({ selectedCountries, setPageCount }) => {
	console.log(selectedCountries);
	return (
		<CountrySelectionWrapper>
			<div>
				<div>즐거운 여행 되셨나요~?</div>
				<div>다음 20가지 국가들 중</div>
				<div>당신이 실제로 다녀온 나라를 골라보세요.</div>
			</div>
			<CountriesWrapper>
				{mockCountries.map((mockCountry) => (
					<Country key={mockCountry.abvName} {...mockCountry} />
				))}
			</CountriesWrapper>
			<ButtonWrapper onClick={() => setPageCount()}>Send</ButtonWrapper>
		</CountrySelectionWrapper>
	);
};

const CountrySelectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-top: auto;
`;

const CountriesWrapper = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-evenly;
`;

const ButtonWrapper = styled.button`
	margin: 0 auto;
	display: block;
`;

export default CountrySelection;
