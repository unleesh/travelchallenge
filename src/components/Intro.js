import React, { useContext } from 'react';
import PageContext from '../contexts/Page.context';

const Intro = () => {
	const { currentPage } = useContext(PageContext);
	return (
		<div>
			<div data-testid='card'>
				<div>COVID-19</div>
				<div>PASSPORT</div>
				<div>여행 성향 테스트</div>
				<div>{currentPage}</div>
			</div>
		</div>
	);
};

export default Intro;
