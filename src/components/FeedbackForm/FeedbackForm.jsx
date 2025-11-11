
import { useState } from 'react';
// import axios from 'axios'

import { useFeedback } from '../../Mocking/FeedbackContext';

function FeedbackForm() {

  //? Mock data to be deleted later
  const { addFeedback } = useFeedback();

  const [newFeedback, setNewFeedback] = useState({ memberId: '', providerName: '', rating: 0, comment: '' })
  const [errors, setErrors] = useState({});

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

   
  const validate = () => {
    const errs = {};

    if (!newFeedback.memberId.trim()) {
      errs.memberId = 'Member ID is required';
    } else if (newFeedback.memberId.length > 36) {
      errs.memberId = 'Member ID cannot exceed 36 characters';
    } else if (!newFeedback.providerName.trim()){
      errs.providerName = "Provider name required.";
    } else if (newFeedback.providerName.length > 80 ){
      errs.providerName = "Provider name too long.";
    } 
    // else if (!Number.isInteger(newFeedback) || newFeedback.rating < 1 || newFeedback.rating > 5){
    //   errs.rating = "Rating must be a number between 1 and 5."
    // }

    return errs;
  };

  const submitFeedback = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // stop submission
    }

    addFeedback(newFeedback); // your global array function
    setNewFeedback({ memberId: '', providerName: '', rating: 0, comment: '' });
    setErrors({});
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
