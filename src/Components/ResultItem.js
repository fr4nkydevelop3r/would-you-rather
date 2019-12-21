import React from "react";
import "../../src/App.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ResultItem({ hasVoted, text, votes, totalVotes, percentage }) {
  let className = "optionNotVoted";

  if (hasVoted) {
    className = "optionVoted";
  }

  return (
    <div className={className}>
      <div className="poll-results">
        <h4>Would you rather?</h4>
        <p>{text}</p>
        <p>
          {votes} of {totalVotes}
        </p>
      </div>
      <div className="progress-bar-container">
        <CircularProgressbar
          className="progress-bar"
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
    </div>
  );
}

export default ResultItem;
