import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

function Menu({ user, dispatch }) {
  const handleLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  return (
    <div className="menu-container">
      <div className="hello-user">{user && <div>Hello {user.name}</div>}</div>
      <div className="menu">
        <NavLink to="/" exact activeClassName="active" className="menu-link">
          Home
        </NavLink>
        <NavLink to="/add" activeClassName="active" className="menu-link">
          New Question
        </NavLink>
        <NavLink
          to="/leaderboard"
          activeClassName="active"
          className="menu-link"
        >
          LeaderBoard
        </NavLink>

        {user && (
          <NavLink
            to="/signin"
            activeClassName="active"
            className="menu-link"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];

  return {
    authedUser,
    user
  };
}

export default withRouter(connect(mapStateToProps, null)(Menu));
