
import { useState } from 'react';
// import axios from 'axios'

import { useFeedback } from '../../Mocking/FeedbackContext';

function FeedbackForm() {

  //? Mock data to be deleted later
  const { addFeedback } = useFeedback();

  const [newFeedback, setNewFeedback] = useState({ memberId: '', providerName: '', rating: 0, comment: '' })

  //!This is for actual functionality
  // const submitFeedback = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post('/api/feedback', newFeedback);
  //     console.log("Feedback submitted: ", response.data)
  //   } catch (err) {
  //     console.log("Error Submitting Feedback", err)
  //   }
  // }

    const submitFeedback = (e) => {
    e.preventDefault();
     console.log("🧪 addFeedback called (mock mode)", newFeedback);
    addFeedback(newFeedback); // adds to global state
    setNewFeedback({ memberId: '', providerName: '', rating: 0, comment: '' });
  };


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
