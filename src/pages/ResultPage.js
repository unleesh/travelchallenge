import React, { useContext } from 'react';
import Result from '../components/Result';
import TravelType from '../components/TravelType';
import styled from 'styled-components';
import PageContext from '../contexts/Page.context';

const ResultPage = () => {
	const {} = useContext(PageContext);
	return (
		<ResultPageWrapper>
			<Result />
			<TravelType />
		</ResultPageWrapper>
	);
};

const ResultPageWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	flex-direction: column;
`;

export default ResultPage;
