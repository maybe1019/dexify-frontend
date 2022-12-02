import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.css';
import reportWebVitals from './reportWebVitals';

import { DAppProvider, Config, BSC } from '@usedapp/core';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const config: Config = {
  readOnlyChainId: BSC.chainId,
  readOnlyUrls: {
    [BSC.chainId]: BSC.rpcUrl as string,
  },
};

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/trust0212/dexify-finance-subgraph',
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <DAppProvider config={config}>
            <ReactNotifications />
            <App />
          </DAppProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
