import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./layouts";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<>Home</>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
