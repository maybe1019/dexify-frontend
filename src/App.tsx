import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./layouts";
import Dexfund from "./pages/Dexfund";
import Manage from "./pages/Manage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dexfund />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
