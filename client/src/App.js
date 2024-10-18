import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './components/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        {/* You can add more routes here for the landing page, login, etc */}
      </Routes>
    </Router>
  );
}

export default App;
