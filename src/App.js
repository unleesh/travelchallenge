import React from 'react';
import PageProvider from './components/providers/PageProvider';
import { AppContainer, CardContainer } from './styles/StyleContainer';
import PageController from './pages/PageController';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://1ab2dd6d33c842b0a85ca08664f059fe@o403093.ingest.sentry.io/5265231"});

function App() {
	return (
		<AppContainer className='App'>
			<CardContainer>
				<PageProvider>
					<PageController />
				</PageProvider>
			</CardContainer>
		</AppContainer>
	);
}

export default App;
