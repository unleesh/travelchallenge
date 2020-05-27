import { createContext } from 'react';

const PageContext = createContext({
	currentPage: 1,
	isSelected: false,
	selectedCountries: [],
	nextPage: () => {},
	selectChoice: () => {},
	selectCountry: () => {},
});

export default PageContext;
