import { useFeedback } from "../../Mocking/FeedbackContext";

function FeedbackList() {
  const { feedbackList } = useFeedback();

  return (
    <div>
      <h3>All Feedback</h3>
      {feedbackList.map((feedback, i) => (
        <div key={i}>
          <strong>{feedback.providerName}</strong> — Rating: {feedback.rating}
          <p>{feedback.comment}</p>
          <small>Member: {feedback.memberId}</small>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
