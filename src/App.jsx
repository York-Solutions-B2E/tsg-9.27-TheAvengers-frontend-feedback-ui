import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SubmitFeedbackPage from './pages/SubmitFeedbackPage/SubmitFeedbackPage'

function App() {


  return (
   <div className='_template'>
    <h1>Give us your feedback!</h1>
    <SubmitFeedbackPage/>
    </div>
  )
}

export default App
