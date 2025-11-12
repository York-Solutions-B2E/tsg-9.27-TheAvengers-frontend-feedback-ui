import { useFeedback } from "../../Mocking/FeedbackContext";

function FeedbackList() {
  const { feedbackList } = useFeedback();

  // const [ feedbackList, setFeedbackList] = useState([]);
  // const getList = async () => {
  //   try{
  //     const response = await axios.get("http://localhost:8080/api/v1/feedback")
  //       console.log("Getting feedback list", response.data)
  //       setFeedbackList(response.data)
  //     } 
  //     catch(err){
  //       console.log("Error getting list", err)
  //     }
  //   }
  
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
