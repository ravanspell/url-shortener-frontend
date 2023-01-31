import React from 'react';
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LayoutTemplate from './templates/LayoutTemplate';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

function App() {
  return (
    <Router>
      <LayoutTemplate>
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="/:urlHash" element={<Redirect />} />
        </Routes>
      </LayoutTemplate>
    </Router>
  );
}

export default App;
