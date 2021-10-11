import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  #app {
    height: 100%;
  }
  button {
    border: none;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
`;

ReactDOM.render(
  // <Provider store={store}></Provider>
    <GlobalStyle>
      <App />
  </GlobalStyle>,
  document.getElementById("root"),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
