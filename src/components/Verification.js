import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';
import { genderOptionStyles, emailOptionStyles } from '../styles/SelectStyles';

const genderOptions = [
	{ value: 'Mr.', label: 'Mr.' },
	{ value: 'Ms.', label: 'Ms.' },
	{ value: 'None', label: 'None' },
];

const emailOptions = [
	{ value: '@gmail.com', label: '@gmail.com' },
	{ value: '@naver.com', label: '@naver.com' },
	{ value: '@daum.net', label: '@daum.net' },
];

// Plan to refactor with react-hook-form
const Verification = () => {
	const [genderOption, setGenderOption] = useState(null);
	const [emailOption, setEmailOption] = useState(null);
	const {
		userInput,
		onUserInputChange,
		setPageCount,
		setCurrentDate,
	} = useContext(PageContext);
	const { username, email, prefix, address } = userInput;
	// const handleOptionChange = (selectedOption) => {
	// 	if (selectedOption.value[0] !== '@') {
	// 		setGenderOption(selectedOption);
	// 	} else {
	// 		setEmailOption(selectedOption);
	// 	}
	// 	console.log(`Option selected:`, selectedOption);
	// };
	// console.log(userInput);
	return (
		<FormOuterWrapper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setCurrentDate();
					setPageCount();
				}}>
				<label>
					<TextWrapper>Passenger</TextWrapper>
					<SelectWrapper>
						<OptionWrapper
							placeholder='Select'
							styles={genderOptionStyles}
							value={{ value: prefix, label: prefix }}
							onChange={(e) => onUserInputChange(e, 'prefix')}
							options={genderOptions}
						/>
						<InputWrapper
							placeholder='Full name'
							type='text'
							name='username'
							value={username}
							onChange={onUserInputChange}
						/>
					</SelectWrapper>
				</label>
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
						<CreatableSelect
							placeholder='@email.com'
							styles={emailOptionStyles}
							value={{ value: address, label: address }}
							onChange={(e) => onUserInputChange(e, 'address')}
							options={emailOptions}
						/>
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
	width: 70%;
	color: black;
	border-radius: 20px;
	text-align: center;
`;

const OptionWrapper = styled(Select)`
	// background-color: red;
	font-size: 20px;
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
