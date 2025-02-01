import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main'; // Your existing Price component
import Price from './Price'; // The new page component

const App = () => {
  return (
    <Router>
      <div>
        {/* Your existing content */}
        <Routes>
          <Route path="/" element={<Main />} /> {/* Main price carousel page */}
          <Route path="/new-page" element={<Price />} /> {/* New page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
