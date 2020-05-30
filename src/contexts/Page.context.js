import { createContext } from 'react';

const PageContext = createContext({
	currentPage: 1,
	isSelected: false,
	selectedCountries: [],
	selectedChoices: [],
	userData: {},
	date: '',
	result: {},
	country: '',
	travelType: '',
	nextPage: () => {},
	selectChoice: () => {},
	selectCountry: () => {},
	getCountry: () => {},
	getTravelType: () => {},
});

export default PageContext;
