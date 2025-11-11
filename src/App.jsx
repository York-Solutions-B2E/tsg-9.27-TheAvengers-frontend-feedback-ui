
import './App.css'
import SubmitFeedbackPage from './pages/SubmitFeedbackPage/SubmitFeedbackPage'
import MyFeedbackPage from './pages/MyFeedbackPage/MyFeedbackPage'
import Nav from './Nav/Nav'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='_template'>
      <h1>Give us your feedback!</h1>
      <Nav/>
      {/* <SubmitFeedbackPage />
      <MyFeedbackPage /> */}
           <Routes>
                <Route path="/feedbackForm" element={<SubmitFeedbackPage />} />
                <Route path="/feedbackList" element={<MyFeedbackPage />} />
                
            </Routes>
    </div>
  )
}

export default App
