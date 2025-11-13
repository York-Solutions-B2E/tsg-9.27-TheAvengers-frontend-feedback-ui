
import './App.css'

import { Routes, Route } from "react-router-dom";

import SubmitFeedbackPage from './pages/SubmitFeedbackPage/SubmitFeedbackPage'
import FeedbackListPage from './pages/FeedbackListPage/FeedbackListPage';
import Nav from './Nav/Nav'
import FindFeedbackPage from './pages/FindFeedbackPage/FindFeedbackPage';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
<div className="min-h-screen bg-gradient-to-br from-white to-[#B7E23F]">
      <HomePage/>
      <Nav />
      <Routes>
        <Route path="/feedbackForm" element={<SubmitFeedbackPage />} />
        <Route path="/feedbackList" element={<FeedbackListPage />} />
        <Route path="/findFeedback" element={<FindFeedbackPage />} />
      </Routes>
    </div>
  )
}

export default App
