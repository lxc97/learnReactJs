import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";

import store from "./store";
import { getToken } from "./utils/localStorageHandler";

let token = getToken();
if (token) {
  console.log("token: ", token);
  const data = jwt.decode(token);
  console.log("data: ", data);
  if (data.exp > Date.now()/1000) {
    store.dispatch({
      type: "LOGIN_SUCCESS",
      payload: { token, username: data.username },
    });
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
