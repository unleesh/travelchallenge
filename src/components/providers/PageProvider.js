import React, { useState } from 'react';
import PageContext from '../../contexts/Page.context';

const PageProvider = ({ children }) => {
	// Define state & setState with hook
	// counts currentPage to show questions by each pages
	const [currentPage, setCurrentPage] = useState(1);

	// sets button to disabled when nothing has selected.
	const [isSelected, setIsSelected] = useState(false);

	// sets the color of button when it's clicked.
	const [btnColor, setBtnColor] = useState('rgba(29, 188, 165, 1)');

	// sets user's countries list when country is clicked
	const [selectedCountries, setSelectedCountries] = useState([]);

	// ----------- setPageCount 와 setBtnState merge 필요

	// called when the button is clicked
	const setPageCount = () => {
		setIsSelected(false);
		setBtnColor('rgba(29, 188, 165, 1)');
		setTimeout(() => {
			setCurrentPage(currentPage + 1);
		}, 2000);
		// console.log(currentPage, isSelected);
	};

	// Button color changes after the click on each choices
	const setBtnState = () => {
		if (isSelected) {
			setBtnColor('rgba(29, 188, 165, 1)');
			setIsSelected(false);
		} else {
			setBtnColor('rgba(249, 180, 56, 1)');
			setIsSelected(true);
		}
		// console.log(isSelected);
	};

	// -----------------------

	const setCountryList = (selected, name) => {
		if (selected) {
			setSelectedCountries(
				selectedCountries.filter((country) => country !== name),
			);
		} else {
			setSelectedCountries([...selectedCountries, name]);
		}
	};

	return (
		<PageContext.Provider
			value={{
				currentPage,
				setPageCount,
				isSelected,
				setBtnState,
				btnColor,
				selectedCountries,
				setCountryList,
			}}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
