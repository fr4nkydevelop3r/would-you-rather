import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PollOptions from "./PollOptions";
import PollResults from "./PollResults";
import SignIn from "./SignIn";
import Nav from "./Nav";
import Menu from "./Menu";

function PollItem({ pollType, id, authedUser }) {
  return (
    <div>
      {authedUser ? (
        <div>
          {" "}
          <Nav /> <Menu />
          <div className="poll-item">
            {pollType === "answered" ? (
              <PollResults />
            ) : (
              <PollOptions id={id} />
            )}
          </div>{" "}
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

function mapStatetoProps(
  { users, questions, answered, unanswered, authedUser },
  props
) {
  const { id } = props.match.params;

  let pollType = "";

  if (unanswered.hasOwnProperty(id)) {
    pollType = "unanswered";
  } else {
    pollType = "answered";
  }

  return {
    pollType,
    id,
    authedUser
  };
}

export default withRouter(connect(mapStatetoProps)(PollItem));
