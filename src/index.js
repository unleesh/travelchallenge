import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './styles/global.css';
import Nanum from './styles/fonts/Nanum.ttf';
import AxiaStencilLight from './styles/fonts/axia-stencil-light/AxiaStencilLight.otf';

const GlobalStyle = createGlobalStyle`
  *{
		margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
		cursor: default;
		color: rgba(255,255,255,1);
    @font-face {
      font-family: 'Nanum';
      src: url(${Nanum});format('truetype');
      font-style: normal;
      font-display: auto;
    }
    @font-face {
      font-family: 'AxiaStencilLight';
      src: url(${AxiaStencilLight});format('truetype');
      font-style: normal;
      font-display: auto;
    }
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
