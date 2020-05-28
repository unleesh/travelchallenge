import React, { useState, useReducer, useEffect, useCallback } from 'react';
import PageContext from '../../contexts/Page.context';

const PageProvider = ({ children }) => {
	// Define state & setState with hook
	// counts currentPage to show questions by each pages
	const [currentPage, setCurrentPage] = useState(1);

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
			username: '',
			email: '',
		},
	);

	// called when the button is clicked
	const setPageCount = () => {
		setTimeout(() => {
			setCurrentPage(currentPage + 1);
		}, 500);
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
	const onUserInputChange = (e) => {
		const name = e.target.name;
		const newValue = e.target.value;
		setUserInput({ [name]: newValue });
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
			}}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
