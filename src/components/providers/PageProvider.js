import React, { useState } from 'react';
import PageContext from '../../contexts/Page.context';

const PageProvider = ({ children }) => {
	// Define state & setState with hook
	// counts currentPage to show questions by each pages
	const [currentPage, setCurrentPage] = useState(1);

	// sets button to disabled when nothing has selected.
	const [isSelected, setIsSelected] = useState(false);

	// sets the color of button when it's clicked.
	const [btnColor, setBtnColor] = useState('#95a5a6');

	// called when the button is clicked
	const setPageCount = () => {
		setCurrentPage(currentPage + 1);
		setIsSelected(false);
		setBtnColor('#95a5a6');
		// console.log(currentPage, isSelected);
	};

	// Button color changes after the click on each choices
	const setBtnState = () => {
		if (isSelected) {
			setBtnColor('#95a5a6');
			setIsSelected(false);
		} else {
			setBtnColor('#16a085');
			setIsSelected(true);
		}
		// console.log(isSelected);
	};

	return (
		<PageContext.Provider
			value={{
				currentPage,
				setPageCount,
				isSelected,
				setBtnState,
				btnColor,
			}}>
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
