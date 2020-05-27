import React from 'react';
import PageProvider from './components/providers/PageProvider';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { AppContainer, CardContainer } from './styles/StyleContainer';
import IntroPage from './pages/IntroPage';
import IntroLoadingPage from './pages/IntroLoadingPage';
import QuestionsPage from './pages/QuestionsPage';
import VerificationPage from './pages/VerificationPage';
import ResultLoadingPage from './pages/ResultLoadingPage';
import ResultPage from './pages/ResultPage';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppContainer className='App'>
				<CardContainer>
					<PageProvider>
						{/* <IntroPage />
						<IntroLoadingPage /> */}
						<QuestionsPage />
						<VerificationPage />
						<ResultLoadingPage />
						<ResultPage />
					</PageProvider>
				</CardContainer>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
