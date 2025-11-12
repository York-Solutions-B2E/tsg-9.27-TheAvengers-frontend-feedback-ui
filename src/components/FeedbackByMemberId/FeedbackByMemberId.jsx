import { useFeedback } from '../../Mocking/FeedbackContext';
import { useState } from 'react';
import axios from 'axios';

function FeedbackByMemberId() {
  const [memberId, setMemberId] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);
  const [error, setError] = useState('');

  // const handleSearch = async (event) => {
  //   event.preventDefault();
  //   setError('');
  //   setFeedbackList([]);

  //   try {
  //     const response = await axios.get(`http://localhost:8080/api/v1/feedback?memberId=${memberId}`);
  //     if (response.data.length === 0) {
  //       setError('No feedback found for this member.');
  //     } else {
  //       setFeedbackList(response.data);
  //     }
  //   } catch (err) {
  //     if (err.response && err.response.status === 400) {
  //       setError('Invalid member ID.');
  //     } else {
  //       setError('Error fetching feedback.');
  //     }
  //   }
  // };
 
  //! code for mocking
  const { getFeedbackByMemberId } = useFeedback();
  const handleSearch = (event) => {
    event.preventDefault();
    setError('');
    setFeedbackList([]);

    const results = getFeedbackByMemberId(memberId);

    if (results.length === 0) {
      setError('No feedback found for this member.');
    } else {
      setFeedbackList(results);
    }
  };

  return (
    <div className='FeedbackByMemberId'>
       <h2>Find feedback by Member ID</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder='Enter a member ID'
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {feedbackList.length > 0 && (
        <div>
          <h3>Feedback Results</h3>
          {feedbackList.map((fb) => (
            <div>
              <p><strong>ID:</strong> {fb.id}</p>
              <p><strong>Member ID:</strong> {fb.memberId}</p>
              <p><strong>Provider Name:</strong> {fb.providerName}</p>
              <p><strong>Rating:</strong> {fb.rating}</p>
              <p><strong>Comment:</strong> {fb.comment}</p>
              <p><strong>Submitted At:</strong> {fb.submittedAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackByMemberId;
