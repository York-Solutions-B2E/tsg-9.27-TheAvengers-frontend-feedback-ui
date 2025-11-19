import { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackList() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/feedback/all");
        console.log("Fetched feedback list:", response.data);
        setFeedbackList(response.data);
      } catch (err) {
        console.log("Error getting list", err);
      }
    };

    fetchFeedback();
  }, []); // empty array = run once on component mount

  return (
    <div className="p-4">
      <h3 className="text-2xl font-semibold mb-4">All Feedback</h3>

      {feedbackList.map((feedback) => (
        <div
          key={feedback.id}
          className="border p-4 mb-4 rounded-lg shadow-sm bg-gray-50"
        >
          <p><strong>Provider:</strong> {feedback.providerName}</p>
          <p><strong>Rating:</strong> {feedback.rating}</p>
          <p><strong>Comment:</strong> {feedback.comment}</p>
          <p className="text-sm text-gray-600">
            <strong>Member:</strong> {feedback.memberId}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
