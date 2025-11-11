import { NavLink } from "react-router-dom";
function Nav() {

  return (
    <div className='Nav'>
      <NavLink to="/feedbackForm">
        feedbackForm
      </NavLink>
      <NavLink to="/feedbackList">
        feedbackList
      </NavLink>
    </div>
  );
}

export default Nav;
