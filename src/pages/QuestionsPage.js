import React, { useContext } from 'react';
import PageContext from '../contexts/Page.context';
import Question from '../components/Question';
import CountrySelection from '../components/CountrySelection';

const Questions = () => {
	const props = useContext(PageContext);
	// Switch page to CountrySelection after Questions
	return props.currentPage === 4 ? (
		<CountrySelection {...props} />
	) : (
		<Question {...props} />
	);
};

export default Questions;
