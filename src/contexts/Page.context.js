import { createContext } from 'react';

const PageContext = createContext({
	currentPage: 0,
	isSelected: false,
	nextPage: () => {},
	selectChoice: () => {},
});

export default PageContext;
