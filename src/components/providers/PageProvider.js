import React, { useState, useReducer, useEffect } from 'react';
import PageContext from '../../contexts/Page.context';
import moment from 'moment';

const PageProvider = ({ children }) => {
	// Define state & setState with hook
	// counts currentPage to show questions by each pages
	const [currentPage, setCurrentPage] = useState(0);

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
		console.log(date);
		setDate(date);
	};

	/**
	 *	1. selectedChoices 에 따른 성향 계산
	 *  2. 랜덤한 나라 선택 Math.random()
	 */
	const nameWithPrefix = `${userInput.prefix} ${userInput.name}`;

	const updateResult = () => {
		const name = userInput.prefix + userInput.name;
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
			}}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
