import React, { useState, useReducer, useEffect } from 'react';
import PageContext from '../../contexts/Page.context';
import moment from 'moment';
import { famousCountries } from '../../mockData';

const PageProvider = ({ children }) => {
	// Define state & setState with hook
	// counts currentPage to show questions by each pages
	const [currentPage, setCurrentPage] = useState(-1);

	// sets button to disabled when nothing has selected.
	// const [isSelected, setIsSelected] = useState(false);

	// // sets the color of button when it's clicked.
	// const [btnColor, setBtnColor] = useState('rgba(29, 188, 165, 1)');

	// sets user's countries list when country is clicked
	const [selectedCountries, setSelectedCountries] = useState([]);

	// set user's choices of questions when clicked
	const [selectedChoices, setSelectedChioces] = useState([]);

	// use reducer to set mutiple inputs -> add dropdown values later
	const [userInput, setUserInput] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			prefix: '',
			username: '',
			email: '',
			address: '',
		},
	);

	// time string for ticket
	const [date, setDate] = useState('');

	// result for user - img(cityText, countryText, homeFlag, countryFlag, landmark)
	const [result, setResult] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			cityText: '',
			countryText: '',
			fromFlag: '',
			toFlag: '',
			landmark: '',
		},
	);

	// called when the button is clicked
	const setPageCount = () => {
		if (currentPage === 14) {
			getTravelType();
			console.log('travel Type :', travelType);
		} else if (currentPage === 15) {
			getCountry();
		}
		setTimeout(() => {
			setCurrentPage(currentPage + 1);
		}, 100);
		// console.log(currentPage, isSelected);
	};

	// Button color changes after the click on each choices
	const addUserChoice = (choice) => {
		setSelectedChioces([...selectedChoices, choice]);
	};

	const setCountryList = (selected, name) => {
		if (selected) {
			setSelectedCountries(
				selectedCountries.filter((country) => country !== name),
			);
		} else {
			setSelectedCountries([...selectedCountries, name]);
		}
	};

	// update inputs with useReducer
	const onUserInputChange = (e, prefix = null) => {
		let name;
		let newValue;
		if (!prefix) {
			//input
			name = e.target.name;
			newValue = e.target.value;
		} else {
			// dropdown
			name = prefix;
			newValue = e.value === 'None' ? '' : e.value;
		}
		console.log('name', name);
		setUserInput({ [name]: newValue });
	};

	const setCurrentDate = () => {
		const date = moment().format('DD MMM YYYY');
		setDate(date);
	};

	/**
	 *	1. selectedChoices 에 따른 성향 계산
	 *  2. 랜덤한 나라 선택 Math.random()
	 */
	const updateResult = () => {};

	const [travelType, setTravelType] = useState('');

	const getTravelType = () => {
		const first = selectedChoices[0],
			second = selectedChoices[3],
			third = selectedChoices[8],
			fourth = selectedChoices[13],
			type = `${first}${second}${third}${fourth}`;
		console.log('type :', type);
		if (type === '1200' || type === '1100') {
			setTravelType('텐션몰빵');
		} else if (type === '1211') {
			setTravelType('방랑의 민족');
		} else if (type === '1111' || type === '1101') {
			setTravelType('자연인');
		} else if (type === '1000') {
			setTravelType('플렉스');
		} else if (type === '1011' || type === '1010') {
			setTravelType('개척자');
		} else if (type === '0201' || type === '1110') {
			setTravelType('프로듀서101');
		} else if (type === '0200' || type === '1210') {
			setTravelType('다다익선');
		} else if (type === '0211' || type === '0210') {
			setTravelType('정약용');
		} else if (type === '0101') {
			setTravelType('덕후');
		} else if (type === '0100' || type === '0110') {
			setTravelType('레저킹');
		} else if (type === '0001') {
			setTravelType('여행 미슐러');
		} else if (type === '0000' || type === '1201') {
			setTravelType('셀럽');
		} else if (type === '1001') {
			setTravelType('나혼자 간다');
		} else if (type === '0011') {
			setTravelType('프로파일러');
		} else if (type === '0010') {
			setTravelType('뉴요커');
		}
		// console.log('travel Type :', travelType);
	};

	const [country, setCountry] = useState('');

	const getCountry = () => {
		const min = 0;
		const max = famousCountries.length;
		const randomNum = Math.floor(Math.random() * (max - min)) + min;
		console.log('country :', famousCountries[randomNum].name);
		setCountry(famousCountries[randomNum].name);
	};

	useEffect(() => {
		console.log('마운트 될 때만 실행됩니다.');
	}, []);

	return (
		<PageContext.Provider
			value={{
				currentPage,
				setPageCount,
				selectedCountries,
				setCountryList,
				selectedChoices,
				addUserChoice,
				userInput,
				onUserInputChange,
				date,
				setCurrentDate,
				travelType,
				country,
			}}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
