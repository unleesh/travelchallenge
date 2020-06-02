import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';

const genderOptions = [
	{ value: 'Mr.', label: 'Mr.' },
	{ value: 'Ms.', label: 'Ms.' },
	{ value: 'None', label: 'None' },
];

const addressOptions = [
	{ value: '@gmail.com', label: '@gmail.com' },
	{ value: '@naver.com', label: '@naver.com' },
	{ value: '@daum.net', label: '@daum.net' },
];

// Plan to refactor with react-hook-form
const Verification = () => {
	const {
		userInput,
		onUserInputChange,
		setPageCount,
		setCurrentDate,
	} = useContext(PageContext);
	const { username, email, title, address } = userInput;

	return (
		<FormOuterWrapper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setCurrentDate();
					setPageCount();
				}}>
				<TextWrapper>Passenger</TextWrapper>
				<SelectWrapper>
					<label for='gender'></label>
					<GenderInputWrapper
						list='genders'
						name='gender'
						id='gender'
						value={title}
						onChange={(e) => onUserInputChange(e, 'title')}
					/>
					<datalist id='genders'>
						{genderOptions.map((item, key) => (
							<option value={item.value} key={`gender_${key}`} />
						))}
					</datalist>
					<InputWrapper
						placeholder='Full name'
						type='text'
						name='username'
						value={username}
						onChange={onUserInputChange}
					/>
				</SelectWrapper>
				<label>
					<TextWrapper>E-mail</TextWrapper>
					<SelectWrapper>
						<InputWrapper
							placeholder='email'
							type='text'
							name='email'
							value={email}
							onChange={onUserInputChange}
						/>
						<label for='address'></label>
						<InputWrapper
							list='addresses'
							name='address'
							id='address'
							value={address}
							onChange={(e) => onUserInputChange(e, 'address')}
						/>
						<datalist id='addresses'>
							{addressOptions.map((item, key) => (
								<option value={item.value} key={`address_${key}`} />
							))}
						</datalist>
					</SelectWrapper>
				</label>
				<Input type='submit' value='submit' />
			</form>
		</FormOuterWrapper>
	);
};

const FormOuterWrapper = styled.div`
	display: flex;
	text-align-last: center;
`;

const TextWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const SelectWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const InputWrapper = styled.input`
	width: ${(props) => (props.name === 'username' ? '50%' : '40%')};
	color: black;
	border-radius: 20px;
	text-align: center;
	font-size: 15px;
	padding: 8px;
	margin-left: 3px;
	margin-right: 3px;
`;

const GenderInputWrapper = styled.input`
	width: 30%;
	color: black;
	border-radius: 20px;
	text-align: center;
	font-size: 17px;
	padding: 7px;
	margin-left: 3px;
	margin-right: 3px;
`;

const OptionWrapper = styled(Select)`
	// background-color: red;
	font-size: 20px;
	width: 40%;
`;

const Input = styled.input`
	/* Adapt the colors based on primary prop */
	background-color: white;
	color: rgba(29, 188, 165, 1);
	font-size: 1em;
	margin: 15% auto 10%;
	display: block;
	width: 35%;
	border-radius: 20px;
`;

export default Verification;
