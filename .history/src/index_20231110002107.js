import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { demoReduxReducer } from "./DemoRedux/redux/reducer/reducer";
import { shoeReducer } from "./Ex_Shoe_Redux/redux/reducer/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
// tổng hợp các reducer lại với nhau
let rootReducer = combineReducers({
  shoe: shoeReducer,
  number: demoReduxReducer,
});
// tạo store
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// redux devtool
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
