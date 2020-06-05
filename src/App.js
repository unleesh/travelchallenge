import React from 'react';
import PageProvider from './components/providers/PageProvider';
import { AppContainer, CardContainer } from './styles/StyleContainer';
import PageController from './pages/PageController';

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
