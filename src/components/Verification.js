import React, { useContext } from 'react';
import PageContext from '../contexts/Page.context';
import styled from 'styled-components';
import { mockData_KOR, mockData_ENG } from '../mockData';

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
		postToGoogle,
		lang,
	} = useContext(PageContext);
	const { username, email, title, address } = userInput;
	const { text } = lang === 'KOR' ? mockData_KOR[16] : mockData_ENG[16];

	return (
		<FormOuterWrapper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setCurrentDate();
					setPageCount();
					postToGoogle();
				}}>
				<TitleWrapper>{text}</TitleWrapper>
				<TextWrapper>Passenger</TextWrapper>
				<SelectWrapper>
					<Select
						id='genderField'
						name='gender'
						onChange={(e) => onUserInputChange(e, 'title')}>
						value={title}
						{genderOptions.map((item, key) => (
							<option value={item.value} key={`gender_${key}`}>
								{item.value}
							</option>
						))}
					</Select>
					{/* </datalist> */}
					<InputWrapper
						id='nameField'
						placeholder='Your name'
						type='text'
						name='username'
						maxlength='10'
						value={username}
						required
						onChange={onUserInputChange}
					/>
				</SelectWrapper>
				<label>
					<TextWrapper>E-mail</TextWrapper>
					<SelectWrapper>
						<InputWrapper
							id='emailField'
							placeholder='email'
							type='text'
							name='email'
							value={email}
							required
							onChange={onUserInputChange}
						/>
						<label htmlFor='address'></label>
						<InputWrapper
							placeholder='@example.com'
							list='addresses'
							name='address'
							id='addressField'
							value={address}
							required
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
	font-family: 'AxiaStencilLight';
	text-align-last: center;
`;

const TextWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
	text-align: center;
	margin: 20px 30px 60px 30px;
	font-size: 17px;
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

const Select = styled.select`
	width: 30%;
	background-color: white;
	color: black;
	border-radius: 20px;
	text-align: center;
	font-size: 17px;
	padding: 7px;
	margin-left: 3px;
	margin-right: 3px;
`;

const Input = styled.input`
	/* Adapt the colors based on primary prop */
	background-color: white;
	color: rgba(29, 188, 165, 1);
	font-family: 'AxiaStencilLight';
	font-size: 1em;
	margin: 15% auto 10%;
	display: block;
	width: 35%;
	border-radius: 20px;
`;

export default Verification;
