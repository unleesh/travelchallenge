import React, { useState, useReducer } from 'react';
import PageContext from '../../contexts/Page.context';
import moment from 'moment';
import { famousCountries } from '../../mockData';
import $ from 'jquery';

const PageProvider = ({ children }) => {
	// Define state & setState with hook
	// counts currentPage to show questions by each pages
	const [currentPage, setCurrentPage] = useState(-1);

	// sets the language option.
	const [lang, setLang] = useState('');

	// sets user's countries list when country is clicked
	const [selectedCountries, setSelectedCountries] = useState([]);

	// set user's choices of questions when clicked
	const [selectedChoices, setSelectedChoices] = useState([]);

	// use reducer to set mutiple inputs -> add dropdown values later
	const [userInput, setUserInput] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			title: 'Mr.',
			username: '',
			email: '',
			address: '',
		},
	);

	// time string for ticket
	const [date, setDate] = useState('');

	const [disabled, setDisabled] = useState(false);

	// called when the button is clicked
	const setPageCount = () => {
		setDisabled(true);
		if (currentPage === 15) {
			getTravelType();
			getCountry();
			setCurrentDate(); // without form
			// getCountry(); without form
		}
		setTimeout(() => {
			setCurrentPage(currentPage + 1);
			setDisabled(false);
		}, 500);
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
			key = title;
			newValue = value === 'None' ? '' : value;
		}
		setUserInput({ [key]: newValue });
	};

	const setCurrentDate = () => {
		const date = moment().format('DD MMM YYYY');
		setDate(date);
	};

	const [travelType, setTravelType] = useState('');

	// selectedChoices 에 따른 성향 계산
	const getTravelType = () => {
		const first = selectedChoices[0],
			second = selectedChoices[3],
			third = selectedChoices[8],
			fourth = selectedChoices[13],
			type = `${first}${second}${third}${fourth}`;
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
		} else if (type === '0111') {
			lang === 'KOR' ? setTravelType('사색형') : setTravelType('outsider');
		} else if (type === '0010') {
			lang === 'KOR' ? setTravelType('뉴요커') : setTravelType('city lover');
		}
	};

	// choose random country using Math.random()
	const [country, setCountry] = useState('');

	const getCountry = () => {
		const min = 0;
		const max = famousCountries.length;
		const randomNum = Math.floor(Math.random() * (max - min)) + min;
		setCountry(famousCountries[randomNum].name);
	};

	// post data to google spreadsheet
	const postToGoogle = () => {
		const { title, username, email, address } = userInput;
		const nameInput = `${title} ${username}`;
		const emailInput = `${email}${address}`;
		const [
			q1,
			q2,
			q3,
			q4,
			q5,
			q6,
			q7,
			q8,
			q9,
			q10,
			q11,
			q12,
			q13,
			q14,
		] = selectedChoices;
		const countryList = selectedCountries.sort().join(', ');

		const data = {
			'entry.1749773494': nameInput, // name
			'entry.2036775354': emailInput, // email
			'entry.1701920475': q1, // q1
			'entry.1960485680': q2,
			'entry.1014793409': q3,
			'entry.1634717638': q4,
			'entry.1393527517': q5,
			'entry.365460716': q6,
			'entry.1306754139': q7,
			'entry.1321363432': q8,
			'entry.1273095494': q9,
			'entry.184882473': q10,
			'entry.2034242815': q11,
			'entry.1105226544': q12,
			'entry.1255908949': q13,
			'entry.619991625': q14,
			'entry.1911455177': countryList, // selected countries
			'entry.98002090': country, // country list
			'entry.1890597124': travelType, // travel type
		};

		$.ajax({
			url:
				'https://cors.bridged.cc/https://docs.google.com/forms/d/e/1FAIpQLSdB4pE_hSe9-ULeKFIe0DQ_hq82LD0rWxQiAHEfr4NAtN_o_g/formResponse?',
			headers: {
					'x-cors-grida-api-key': 'cf009813-58ed-46f1-a679-e65035e1d4f1'
				  },
			data,
			type: 'POST',
			dataType: 'xml',
			processData: true,
			success: function (d) {},
			error: function (x, y, z) {
				$('#success-msg').show();
				$('#form').hide();
			},
		});
		return false;
	};

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
				postToGoogle,
				disabled,
				setDisabled,
			}}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
