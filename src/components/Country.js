import React, { useState, useCallback, useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled, { keyframes, css } from 'styled-components';

const Country = ({ name, abvName }) => {
	// checks if the country is selected
	const [isSelected, setIsSelected] = useState(false);
	// useContext provides props from PageProvider
	const { setCountryList } = useContext(PageContext);
	// calls when country is clicked.
	const selectCountry = useCallback(() => {
		setCountryList(isSelected, name);
		if (!isSelected) {
			setIsSelected(true);
		} else {
			setIsSelected(false);
		}
	}, [isSelected, name, setCountryList]);
	// console.log(isSelected, abvName);
	return (
		<OuterImgWrapper onClick={selectCountry} isSelected={isSelected}>
			<ImgWrapper
				src={require(`../Imgs/Countries/${name}.png`)}
				alt=''
				isSelected={isSelected}
			/>
		</OuterImgWrapper>
	);
};

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
	}
`;

const rotateN360 = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
	}
`;

const OuterImgWrapper = styled.div`
	border: ${(props) =>
		props.isSelected === true ? '1px solid black' : '1px solid transparent'};
	border-width: medium;
	border-radius: 50%;
	border-bottom-color: transparent;
	padding: 2px;
	animation: ${(props) =>
		props.isSelected === true
			? css`
					${rotate360} infinite 1s linear;
			  `
			: ''}  
	position: relative;
	width: 20vw;
	height: 20vw;
	overflow: hidden;
	margin-bottom: 3px;
`;

const ImgWrapper = styled.img`
	border: ${(props) =>
		props.isSelected === true ? '1px solid black' : '1px solid transparent'};
	border-width: medium;
	border-radius: 50%;
	border-right-color: transparent;
	animation: ${(props) =>
		props.isSelected === true
			? css`
					${rotateN360} infinite 1s linear;
			  `
			: ''}  
	padding: 2px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export default React.memo(Country);
