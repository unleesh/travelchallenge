import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './styles/global.css';
import AxiaStencilLight from './styles/fonts/axia-stencil-light/AxiaStencilLight.otf';
import * as Sentry from '@sentry/browser';

const GlobalStyle = createGlobalStyle`
  *{
		margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
		cursor: default;
		color: rgba(255,255,255,1);
    @font-face {
      font-family: 'AxiaStencilLight';
      src: url(${AxiaStencilLight});format('otf');
      font-style: normal;
      font-display: auto;
    }
    font-size: 25px;
  }
`;

Sentry.init({
	dsn:
		'https://1ab2dd6d33c842b0a85ca08664f059fe@o403093.ingest.sentry.io/5265231',
});
ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
