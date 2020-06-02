import React, { useContext } from 'react';
import PageContext from '../contexts/Page.context';
import IntroPage from './IntroPage';
import StartPage from './StartPage';
import QuestionsPage from './QuestionsPage';
import VerificationPage from './VerificationPage';
import ResultLoadingPage from './ResultLoadingPage';
import ResultPage from './ResultPage';

const PageController = () => {
	const { currentPage } = useContext(PageContext);
	if (currentPage === -2) {
		return <StartPage />;
	} else if (currentPage === -1) {
		return <IntroPage />;
		// } else if (currentPage === 15) {
		// 	return <VerificationPage />;
		// } else if (currentPage === 16) {
	} else if (currentPage === 15) {
		return (
			<>
				{/* <ResultLoadingPage /> */}
				<ResultPage />
			</>
		);
	}
	return <QuestionsPage />;
};

export default PageController;
