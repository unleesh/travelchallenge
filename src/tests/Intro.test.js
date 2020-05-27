import React from 'react';
import { render } from '@testing-library/react';
import Intro from '../components/Intro';

describe('<Intro />', () => {
	const setup = (props = {}) => {
		const utils = render(<Intro {...props} />);
		const { getByText, getByTestId } = utils;
		const container = getByTestId('container'); // button이 있는지 확인 -> 이거 터치 가능한 div로 수정
		const card = getByTestId('card');
		const covid19 = getByText('COVID-19');
		const passport = getByText('PASSPORT');
		const travel_test = getByText('여행 성향 테스트');
		return {
			...utils,
			container,
			card,
			covid19,
			passport,
			travel_test,
		};
	};

	it('has a container, card, covid19, passport, travel_test', () => {
		const { container, card, covid19, passport, travel_test } = setup();
		expect(container).toBeTruthy();
		expect(card).toBeTruthy();
		expect(covid19).toBeTruthy();
		expect(passport).toBeTruthy();
		expect(travel_test).toBeTruthy();
	});
});
