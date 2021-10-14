<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/configStore";

import reportWebVitals from "./reportWebVitals";

import App from "./Shared/App";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';

import store from "./redux/configStore";
import { Provider } from "react-redux";
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
<<<<<<< HEAD
  document.getElementById("root")
=======
  document.getElementById("root"),
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
