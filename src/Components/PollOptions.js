import React from "react";
import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
import { withRouter } from "react-router-dom";

class PollOptions extends React.Component {
  state = {
    selectedOption: "optionOne"
  };

  handleSubmitAnswer = (e, poll, authedUser) => {
    e.preventDefault();
    this.props.handleSaveAnswer(authedUser, poll, this.state.selectedOption);
    this.props.history.push(`/poll/${poll.id}`);
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    const { user, poll, authedUser } = this.props;

    return (
      <div className="pollContainer">
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
          <form
            className="poll-options-form"
            onSubmit={e => {
              this.handleSubmitAnswer(e, poll, authedUser);
            }}
          >
            <div className="pollOptions">
              <div className="pollOption">
                <input
                  type="radio"
                  id="optionOne"
                  name="poll"
                  value="optionOne"
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={this.handleOptionChange}
                />
                <label className="option1" htmlFor="optionOne">
                  {poll.optionOne.text}
                </label>
              </div>

              <div className="pollOption">
                <input
                  type="radio"
                  id="optionTwo"
                  name="poll"
                  value="optionTwo"
                  checked={this.state.selectedOption === "optionTwo"}
                  onChange={this.handleOptionChange}
                />
                <label className="option2" htmlFor="optionTwo">
                  {poll.optionTwo.text}
                </label>
              </div>
            </div>
            <div className="vote-poll">
              <button className="votePoll-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSaveAnswer: (authedUser, qid, answer) => {
      dispatch(handleSaveAnswer(authedUser, qid, answer));
    }
  };
}

function mapStateToProps({ users, unanswered, authedUser }, props) {
  const { id } = props;
  const poll = unanswered[id];
  const user = users[poll.author];
  return {
    user,
    poll,
    authedUser
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PollOptions)
);
