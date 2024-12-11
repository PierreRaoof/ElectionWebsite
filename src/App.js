import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BallotReviewPage from './pages/BallotReviewPage';
import ElectionResultsPage from "./pages/ElectionResultsPage";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Ballot Review Page */}
        <Route path="/review" element={<BallotReviewPage />} />

        {/* Default homepage */}
        <Route path="/" element={<ElectionResultsPage />} />

        {/* Login and Signup Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
