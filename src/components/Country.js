import React, { useState, useCallback, useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';

const Country = ({ name, abvName }) => {
	// checks if the country is selected
	const [isSelected, setIsSelected] = useState(false);
	// useContext provides props from PageProvider
	const { setCountryList } = useContext(PageContext);
	// calls when country is clicked.
	const selectCountry = useCallback(() => {
		console.log(isSelected);
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
			<ImgWrapper src={require(`../Imgs/Countries/${name}.png`)} alt='' />
			<ImgText isSelected={isSelected}>{name}</ImgText>
		</OuterImgWrapper>
	);
};

const OuterImgWrapper = styled.div`
	border-width: medium;
	border-radius: 50%;
	border-bottom-color: transparent;
	padding: 1px;
	position: relative;
	width: 3em;
	margin-bottom: 3px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`;

const ImgWrapper = styled.img`
	border-width: medium;
	border-radius: 50%;
	border-right-color: transparent;
	padding: 1px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ImgText = styled.div`
	display: flex;
	position: absolute;
	font-size: 15px;
	margin-top: 9px;
	padding: 0px 5px 3px 5px;
	color: ${(props) =>
		props.isSelected === true ? 'rgba(249, 180, 56, 1)' : 'white'};
`;

export default React.memo(Country);
