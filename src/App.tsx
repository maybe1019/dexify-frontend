import React from "react";
import { useEthers, shortenAddress } from '@usedapp/core'

function App() {
  const { account, activateBrowserWallet, deactivate } = useEthers()

  const handleConnect = () => {
    if(account) {
      deactivate()
    }
    else {
      activateBrowserWallet()
    }
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-[primary]">
        Hello world!
      </h1>
      <button onClick={handleConnect}>{account ? shortenAddress(account) : 'Connect'}</button>
    </div>
  );
}

export default App;
