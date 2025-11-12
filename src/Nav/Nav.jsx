import { NavLink } from "react-router-dom";
import './Nav.css'
function Nav() {

  return (
    <div className='Nav'>
      <NavLink to="/feedbackForm" className="nav-button">
        Feedback Form 
      </NavLink>
      <NavLink to="/feedbackList" className="nav-button">
        Feedback List
      </NavLink>
    </div>
  );
}

export default Nav;

const submitFeedback = async (event) => {
  event.preventDefault();

  // run your validation checks
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return; // stop submission if invalid
  }

  try {
    // ✅ send the feedback to your Spring Boot backend
    const response = await axios.post(
      "http://localhost:8080/api/v1/feedback",
      newFeedback
    );

    console.log("✅ Feedback submitted:", response.data);

    // reset form after successful submission
    setNewFeedback({ memberId: '', providerName: '', rating: 0, comment: '' });
    setErrors({});
  } catch (err) {
    console.error("❌ Error submitting feedback:", err);
  }
};