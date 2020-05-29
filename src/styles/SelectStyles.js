export const genderOptionStyles = {
	option: (provided, state) => ({
		...provided,
		color: 'black',
		fontSize: 16,
		backgroundColor: state.isSelected ? '#eee' : '',
		textAlign: 'center',
		cursor: 'pointer',
	}),
	container: (base) => ({
		...base,
		width: '30%',
		marginRight: 10,
		background: '',
		fontSize: 12,
	}),
	control: (base) => ({
		...base,
		fontSize: 16,
		borderRadius: 20,
		width: '100%',
		textAlign: 'center',
		cursor: 'pointer',
	}),
	dropdownIndicator: (base) => ({
		...base,
		display: 'none',
	}),
	indicatorSeparator: (base) => ({
		...base,
		display: 'none',
	}),
	valueContainer: (base) => ({
		...base,
		padding: 0,
		paddingLeft: 2,
		background: '',
		fontSize: 12,
	}),
};

export const emailOptionStyles = {
	option: (provided, state) => ({
		...provided,
		color: 'black',
		fontSize: 16,
		backgroundColor: state.isSelected ? '#eee' : '',
		textAlign: 'center',
		cursor: 'pointer',
	}),
	container: (base) => ({
		...base,
		width: '100%',
		marginLeft: 10,
		background: '',
		fontSize: 12,
	}),
	control: (base) => ({
		...base,
		fontSize: 12,
		borderRadius: 20,
		width: '100%',
		textAlign: 'center',
		cursor: 'pointer',
	}),
	dropdownIndicator: (base) => ({
		...base,
		display: 'none',
	}),
	indicatorSeparator: (base) => ({
		...base,
		display: 'none',
	}),
	valueContainer: (base) => ({
		...base,
		padding: 0,
		paddingLeft: 2,
		backgroundColor: '',
		fontSize: 12,
	}),
};
