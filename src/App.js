import React from 'react';
import PageProvider from './components/providers/PageProvider';
import { AppContainer, CardContainer, BannerContainer } from './styles/StyleContainer';
import PageController from './pages/PageController';
import styled from 'styled-components';

function App() {
	return (
		<AppContainer className='App'>
			<CardContainer>
				<PageProvider>
					<PageController />
				</PageProvider>
			</CardContainer>
			<BannerContainer>
				<a href='https://ghiblitest.promxr.com' target='blank'>
					<GhibliTestLinkImgWrapper
					src={require(`../src/Imgs/ghibrimeta.png`)}
					alt=''
					/>
				</a>
			</BannerContainer>
		</AppContainer>
	);
}

const GhibliTestLinkImgWrapper = styled.img`
	display: flex;
	z-index: 1;
	position: absolute;
	width: 100%;
	bottom: -20%;
	right: 0%;
	align-items: center;
`;

export default App;
