
import './App.css'
import SubmitFeedbackPage from './pages/SubmitFeedbackPage/SubmitFeedbackPage'
import MyFeedbackPage from './pages/MyFeedbackPage/MyFeedbackPage'
import Nav from './Nav/Nav'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='_template'>
      <h1>The Avengers-We fight disease!</h1>
      <img
        src="src/assets/ChatGPT Image Nov 12, 2025, 08_27_40 AM copy.png"
        alt="Avengers Doctors"
        style={{ width: "400px", height: "auto" }}
      />
      <h2>Give us your feedback!</h2>
      <Nav />
      <Routes>
        <Route path="/feedbackForm" element={<SubmitFeedbackPage />} />
        <Route path="/feedbackList" element={<MyFeedbackPage />} />
      </Routes>
    </div>
  )
}

export default App
