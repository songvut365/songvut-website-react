import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <div id="footer">
        <p>Copyright © 2022 All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
