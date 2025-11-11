
import { useState } from 'react';
// import axios from 'axios'

function FeedbackForm() {

  const [newFeedback, setNewFeedback] = useState({ memberId: '', providerName: '', rating: 0, comment: '' })

  const submitFeedback = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/feedback', newFeedback);
      console.log("Feedback submitted: ", response.data)
    } catch (err) {
      console.log("Error Submitting Feedback", err)
    }
  }


  return (
    <div className='FeedbackForm'>
      <form onSubmit={submitFeedback}>
      <input
          type='text'
          placeholder='Member Id'
          value={newFeedback.memberId}
          onChange={(e) => setNewFeedback({ ...newFeedback, memberId: e.target.value })}
        />
        <input
          type='text'
          placeholder='Provider Name'
          value={newFeedback.providerName}
          onChange={(e) => setNewFeedback({ ...newFeedback, providerName: e.target.value })}
        />
        <input
          type='number'
          placeholder='Rating'
          value={newFeedback.rating}
          onChange={(e) => setNewFeedback({ ...newFeedback, rating: Number(e.target.value) })}
        />
        <input
          type='text'
          placeholder='Comment'
          value={newFeedback.comment}
          onChange={(e) => setNewFeedback({ ...newFeedback, comment: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
