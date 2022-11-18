import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { DAppProvider, Config } from '@usedapp/core';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';
import { NETWORK } from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const config: Config = {
  readOnlyChainId: NETWORK.chainId,
  readOnlyUrls: {
    [NETWORK.chainId]: NETWORK.RPC_URL,
  },
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DAppProvider config={config}>
          <App />
        </DAppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
