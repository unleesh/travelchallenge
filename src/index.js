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
		font-size: 25px;
		-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
