import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { withRouter, Link } from "react-router-dom";

function Poll({ poll, user, history }) {
  const toPoll = (e, id) => {
    e.preventDefault();
    history.push(`/questions/${id}`);
  };

  return (
    <div className="poll-container">
      <div className="author-poll">
        <span className="author-poll-name">{user.name} asks:</span>
        <img
          className="author-poll-image"
          alt={user.name}
          src={user.avatarURL}
          width="70px"
          height="70px"
        />
      </div>
      <div className="poll">
        <h4 className="poll-title">Would you rather</h4>
        <p className="poll-option">...{poll.optionOne.text}</p>
        <Link to={`/questions/${poll.id}`}>
          <button
            className="view-poll-btn"
            onClick={e => {
              toPoll(e, poll.id);
            }}
            to={`/questions/${poll.id}`}
          >
            View poll
          </button>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users }, props) {
  // console.log(props);
  const poll = questions[props.id];
  const user = users[poll.author];

  return {
    poll,
    user
  };
}

export default withRouter(connect(mapStateToProps, null)(Poll));
