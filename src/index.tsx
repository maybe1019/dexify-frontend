import './assets/style/styles.scss'

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Config, DAppProvider } from "@usedapp/core";

import { NETWORK } from './config'

const config: Config = {
  readOnlyChainId: NETWORK.CHAIN_ID,
  readOnlyUrls: {
    [NETWORK.CHAIN_ID]: NETWORK.RPC_URL,
  },
};


ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
