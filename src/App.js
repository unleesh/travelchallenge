import React from 'react';
import PageProvider from './components/providers/PageProvider';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { AppContainer, CardContainer } from './styles/StyleContainer';
import PageController from './pages/PageController';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppContainer className='App'>
				<CardContainer>
					<PageProvider>
						<PageController />
					</PageProvider>
				</CardContainer>
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
