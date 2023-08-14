import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { accountReducer } from "./reducers/account";
import { bonusReducer } from "./reducers/bonus";
import logger from "redux-logger";
// import thunk from "react-thunk";
import { Provider } from "react-redux";

// create store

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
