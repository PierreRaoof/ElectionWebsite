import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BallotReviewPage from './pages/BallotReviewPage';
import ElectionResultsPage from "./pages/ElectionResultsPage";
import BallotPage from './pages/BallotPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Default homepage */}
        <Route path="*" element={<HomePage />} />

        {/* Ballot Review Page */}
        <Route path="/review" element={<BallotReviewPage />} />

        {/* Election Results Page */}
        <Route path="/electionresults" element={<ElectionResultsPage />} />

        {/* Login and Signup Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Ballot Page */}
        <Route path="/castvote" element={<BallotPage />} />

        {/* Success Page */}
        <Route path="/success" element={<SuccessPage />} />

      </Routes>
    </Router>
  );
};

export default App;
