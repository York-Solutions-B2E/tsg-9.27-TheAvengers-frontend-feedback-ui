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
        <NavLink to="/feedbackById" className="nav-button">
        Feedback by Id
      </NavLink>
    </div>
  );
}

export default Nav;