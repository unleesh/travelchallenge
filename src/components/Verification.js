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
	const { userInput, onUserInputChange } = useContext(PageContext);
	const { username, email } = userInput;
	const handleOptionChange = (selectedOption) => {
		if (selectedOption.value[0] !== '@') {
			setGenderOption(selectedOption);
		} else {
			setEmailOption(selectedOption);
		}
		console.log(`Option selected:`, selectedOption);
	};
	useEffect(() => {
		console.log(genderOption, emailOption);
	}, [genderOption, emailOption, setGenderOption, setEmailOption]);

	return (
		<div>
			<form
				onSubmit={() => {
					return;
				}}>
				<label>
					<TextWrapper>Passenger</TextWrapper>
					<SelectWrapper>
						<OptionWrapper
							placeholder='Select'
							styles={genderOptionStyles}
							value={genderOption}
							onChange={handleOptionChange}
							options={genderOptions}
						/>
						<InputWrapper
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
							type='text'
							name='email'
							value={email}
							onChange={onUserInputChange}
						/>
						<CreatableSelect
							styles={emailOptionStyles}
							isClearable
							value={emailOption}
							onChange={handleOptionChange}
							options={emailOptions}
						/>
					</SelectWrapper>
				</label>
				<input type='submit' value='submit' />
			</form>
		</div>
	);
};

const TextWrapper = styled.div`
	text-align: center;
`;

const SelectWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const InputWrapper = styled.input`
	width: 70%;
	color: black;
`;

const OptionWrapper = styled(Select)`
	background-color: red;
	font-size: 20px;
`;

export default Verification;
