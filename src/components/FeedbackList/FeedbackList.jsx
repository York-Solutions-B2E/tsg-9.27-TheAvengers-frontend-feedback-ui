import { useFeedback } from "../../Mocking/FeedbackContext";

function FeedbackList() {
  const { feedbackList } = useFeedback();

  return (
    <div>
      <h3>All Feedback</h3>
      {feedbackList.map((f, i) => (
        <div key={i} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
          <strong>{f.providerName}</strong> — Rating: {f.rating}
          <p>{f.comment}</p>
          <small>Member: {f.memberId}</small>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
