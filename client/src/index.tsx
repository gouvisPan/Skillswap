import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/_global.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/reducers/index";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
);
