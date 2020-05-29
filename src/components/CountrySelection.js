import React from 'react';
import Country from './Country';
import { mockCountries } from '../mockData';
import styled from 'styled-components';
import { QuestionTitleWrapper } from '../styles/StyleContainer';

const CountrySelection = ({ selectedCountries, setPageCount }) => {
	console.log(selectedCountries);
	return (
		<CountrySelectionWrapper>
			<CountryTitleWrapper>
				<QuestionTitleWrapper>즐거운 여행 되셨나요~?</QuestionTitleWrapper>
				<QuestionTitleWrapper>다음 20가지 국가들 중</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					당신이 다녀온 나라를 골라보세요.
				</QuestionTitleWrapper>
			</CountryTitleWrapper>
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

const ButtonWrapper = styled.button`
	margin: 5% auto 10%;
	display: block;
`;

const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: 'white';
	color: rgba(29, 188, 165, 1);
	font-size: 1em;
	margin: 5% auto 10%;
	display: block;
	width: 25%;
	border-radius: 20px;
`;

export default CountrySelection;
