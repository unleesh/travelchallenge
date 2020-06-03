import React, { useState, useReducer, useEffect } from 'react';
import PageContext from '../../contexts/Page.context';
import moment from 'moment';
import { famousCountries } from '../../mockData';

const PageProvider = ({ children }) => {
	// Define state & setState with hook
	// counts currentPage to show questions by each pages
	const [currentPage, setCurrentPage] = useState(-1);

	// sets the language option.
	const [lang, setLang] = useState('');

	// // sets the color of button when it's clicked.
	// const [btnColor, setBtnColor] = useState('rgba(29, 188, 165, 1)');

	// sets user's countries list when country is clicked
	const [selectedCountries, setSelectedCountries] = useState([]);

	// set user's choices of questions when clicked
	const [selectedChoices, setSelectedChoices] = useState([]);

	// use reducer to set mutiple inputs -> add dropdown values later
	const [userInput, setUserInput] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			title: '',
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
		if (currentPage === 15) {
			getTravelType();
			getCountry();
			setCurrentDate(); // without form
			// getCountry(); without form
		}
		setTimeout(() => {
			setCurrentPage(currentPage + 1);
		}, 50);
		// console.log(currentPage, isSelected);
	};

	// Button color changes after the click on each choices
	const addUserChoice = (choice) => {
		setSelectedChoices([...selectedChoices, choice]);
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
	const onUserInputChange = (e, title = null) => {
		let key;
		let newValue;
		const { name, value } = e.target;
		if (!title) {
			//input
			key = name;
			newValue = value;
		} else {
			// dropdown
			console.log('e.target :', value);
			key = title;
			newValue = value === 'None' ? '' : value;
		}
		console.log('key', key);
		setUserInput({ [key]: newValue });
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
			lang === 'KOR' ? setTravelType('텐션몰빵') : setTravelType('energizer');
		} else if (type === '1211') {
			lang === 'KOR'
				? setTravelType('방랑의 민족')
				: setTravelType('wanderlust');
		} else if (type === '1111' || type === '1101') {
			lang === 'KOR' ? setTravelType('자연인') : setTravelType('nature seeker');
		} else if (type === '1000') {
			lang === 'KOR' ? setTravelType('플렉스') : setTravelType('millionaire');
		} else if (type === '1011' || type === '1010') {
			lang === 'KOR' ? setTravelType('개척자') : setTravelType('first mover');
		} else if (type === '0201' || type === '1110') {
			lang === 'KOR' ? setTravelType('프로듀서101') : setTravelType('producer');
		} else if (type === '0200' || type === '1210') {
			lang === 'KOR' ? setTravelType('다다익선') : setTravelType('party lover');
		} else if (type === '0211' || type === '0210') {
			lang === 'KOR' ? setTravelType('정약용') : setTravelType('scrooge');
		} else if (type === '0101') {
			lang === 'KOR' ? setTravelType('덕후') : setTravelType('geek');
		} else if (type === '0100' || type === '0110') {
			lang === 'KOR'
				? setTravelType('레저킹')
				: setTravelType('world explorer');
		} else if (type === '0001') {
			lang === 'KOR'
				? setTravelType('여행 미슐러')
				: setTravelType('michelin guide');
		} else if (type === '0000' || type === '1201') {
			lang === 'KOR' ? setTravelType('셀럽') : setTravelType('trend hunter');
		} else if (type === '1001') {
			lang === 'KOR' ? setTravelType('나혼자 간다') : setTravelType('Outsider');
		} else if (type === '0011') {
			lang === 'KOR'
				? setTravelType('프로파일러')
				: setTravelType('perfectionist');
		} else if (type === '0010') {
			lang === 'KOR' ? setTravelType('뉴요커2') : setTravelType('city lover');
		}
		// console.log('travel Type :', travelType);
	};

	const [country, setCountry] = useState('');

	const getCountry = () => {
		const min = 0;
		const max = famousCountries.length;
		const randomNum = Math.floor(Math.random() * (max - min)) + min;
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
				lang,
				setLang,
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
