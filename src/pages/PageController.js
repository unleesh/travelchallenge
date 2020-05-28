import React, { useContext } from 'react';
import PageContext from '../contexts/Page.context';
import IntroPage from './IntroPage';
import IntroLoadingPage from './IntroLoadingPage';
import QuestionsPage from './QuestionsPage';
import VerificationPage from './VerificationPage';
import ResultLoadingPage from './ResultLoadingPage';
import ResultPage from './ResultPage';

const PageController = () => {
	const { currentPage } = useContext(PageContext);
	if (currentPage === 0) {
		return <IntroPage />; // {/* <IntroLoadingPage /> */}
	} else if (currentPage === 5) {
		return <VerificationPage />;
	} else if (currentPage === 6) {
		return (
			<>
				<ResultLoadingPage />
				<ResultPage />
			</>
		);
	}
	return <QuestionsPage />;
};

export default PageController;
