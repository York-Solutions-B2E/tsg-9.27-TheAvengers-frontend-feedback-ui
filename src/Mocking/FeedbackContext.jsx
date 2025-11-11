import { createContext, useContext, useState } from 'react';

// 1️⃣ Create a new context
const FeedbackContext = createContext();

// 2️⃣ Custom hook for easy access
export function useFeedback() {
  return useContext(FeedbackContext);
}

// 3️⃣ Provider component that wraps your app
export function FeedbackProvider({ children }) {
  // This is your global array of feedback
  const [feedbackList, setFeedbackList] = useState([
    // You can start with an empty array or mock seed data
    { memberId: '001', providerName: 'Dr. Smith', rating: 5, comment: 'Excellent!' }
  ]);

  // Function for adding a new feedback item
  const addFeedback = (feedback) => {
    console.log('🧩 Adding feedback to global array:', feedback);
    setFeedbackList((prev) => [...prev, feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbackList, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}
