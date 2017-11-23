import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import createStore from "./store";

const store = createStore({
  budget: { profit: 0, marketExpanse: 0, farmExpanse: 0, deliveryExpanse: 0 },
  farm: { orders: [], profit: 0, productionPrice: 0 },
  market: { orders: [] },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
