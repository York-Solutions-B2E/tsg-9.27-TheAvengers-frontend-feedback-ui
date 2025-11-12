import { useFeedback } from '../../Mocking/FeedbackContext';
import { useState } from 'react';
import axios from 'axios'

function FeedbackById( ) {
    
  const [feedbackId, setFeedbackId] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState('');

  // const handleSearch = async (event) =>{
  //   event.preventDefault();
  //   setError('');
  //   setFeedback(null);

  //   try {
  //     const response = await axios.get(`http://localhost:8080/api/v1/feedback/${id}`);
  //     setFeedback(response.data);
  //   } catch (err) {
  //     if (err.response && err.response.status === 400){
  //       setError("Feedback not found");
  //     } else {
  //       setError("Error fetching feedback");
  //     }
  //   }
  // }
  
  // //! code for mocking
  const { feedbackList } = useFeedback();
    const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setFeedback(null);

    const found = feedbackList.find((f) => f.id === feedbackId.trim());

    if (found) {
      setFeedback(found);
    } else {
      setError('Feedback not found.');
    }
  };

  return (
     <div className='FeedbackById'>
      <h2>Find feedback by ID</h2>
      <form onSubmit={handleSearch}>
        <input
        type="text" 
        placeholder='Enter a feedback ID'
        value={feedbackId}
        onChange={(e)=> setFeedbackId(e.target.value)}
        />
     <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
        {feedback && (
        <div>
          <h3>Feedback Details</h3>
          <p><strong>ID:</strong> {feedback.id}</p>
          <p><strong>Member ID:</strong> {feedback.memberId}</p>
          <p><strong>Provider Name:</strong> {feedback.providerName}</p>
          <p><strong>Rating:</strong> {feedback.rating}</p>
          <p><strong>Comment:</strong> {feedback.comment}</p>
          <p><strong>Submitted At:</strong> {feedback.submittedAt}</p>
        </div>
      )}
    </div>
  );
  }

export default FeedbackById;
