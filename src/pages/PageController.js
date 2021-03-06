import React, { useContext } from 'react';
import PageContext from '../contexts/Page.context';
import IntroPage from './IntroPage';
import StartPage from './StartPage';
import QuestionsPage from './QuestionsPage';
import VerificationPage from './VerificationPage';

import ResultPage from './ResultPage';

const PageController = () => {
	const { currentPage } = useContext(PageContext);
	if (currentPage === -1) {
		return <StartPage />;
	} else if (currentPage === 0) {
		return <IntroPage />;
	} else if (currentPage === 16) {
		return <VerificationPage />;
	} else if (currentPage === 17) {
		return <ResultPage />;
	}
	return <QuestionsPage />;
};

export default PageController;
