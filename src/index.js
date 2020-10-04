import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import "./views/style/custom.css";
import { Provider } from "react-redux";
import store from "./store";
import { LOGIN } from "./constants/ActionsType";
import jwtDecode from 'jwt-decode';
require("dotenv").config();

let token = localStorage.getItem("token");
if (token) {
  const userData = jwtDecode(token);
  store.dispatch({type: LOGIN, payload: {name:userData.username } });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
