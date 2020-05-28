import { createContext } from 'react';

const PageContext = createContext({
	currentPage: 1,
	isSelected: false,
	selectedCountries: [],
	selectedChoices: [],
	userData: {},
	nextPage: () => {},
	selectChoice: () => {},
	selectCountry: () => {},
});

export default PageContext;
