import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './styles/global.css';

const GlobalStyle = createGlobalStyle`
  *{
		margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
		cursor: default;
		color: rgba(255,255,255,1);
		margin-left: 10px;
		margin-bottom: 10px;
		font-size: 25px;
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
