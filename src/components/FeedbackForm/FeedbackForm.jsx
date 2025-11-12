
import { useState } from 'react';
// import axios from 'axios'

import { useFeedback } from '../../Mocking/FeedbackContext';

function FeedbackForm() {

  const [newFeedback, setNewFeedback] = useState({ memberId: '', providerName: '', rating: '', comment: '' })
  const [errors, setErrors] = useState({});

  //? This is for actual functionality
  // const submitFeedback = async (event) => {
  //   event.preventDefault();

  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return; // stop submission
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:8080/api/v1/feedback", newFeedback);
  //     console.log("Feedback submitted: ", response.data);
      
  //     setNewFeedback({ memberId: '', providerName: '', rating: 0, comment: '' });
  //     setErrors({});
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
    } else if (!newFeedback.rating > 0){
      errs.rating = "Please enter a rating"
    } else if (newFeedback.rating > 5 ){
      errs.rating = "Rating out of range"  
    } else if (!newFeedback.comment.trim()){
      errs.comment = "Please enter your comment"
    } else if (newFeedback.comment.length > 200){
      errs.comment = "Comment length too long"
    }
    return errs;
  };

  //! code for mocking
  const { addFeedback } = useFeedback();
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
          placeholder='Rating from 1-5'
          value={newFeedback.rating}
          onChange={(e) => setNewFeedback({ ...newFeedback, rating: e.target.value ? Number(e.target.value) : "" })}
        />
        <input
          type='text'
          placeholder='Comment'
          value={newFeedback.comment}
          onChange={(e) => setNewFeedback({ ...newFeedback, comment: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {errors.memberId && <p style={{ color: 'red' }}>{errors.memberId}</p>}
      {errors.providerName && <p style={{ color: 'red' }}>{errors.providerName}</p>}
      {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
      {errors.comment && <p style={{ color: 'red' }}>{errors.comment}</p>}     
    </div>
  );
}

export default FeedbackForm;
