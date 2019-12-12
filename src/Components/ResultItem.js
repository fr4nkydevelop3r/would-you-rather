import React from 'react';
import '../../src/App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ResultItem extends React.Component {
    render() {

        let className = 'optionNotVoted';

        if(this.props.hasVoted){
            className= 'optionVoted';
        }

        return (
            <div className={className}>
                <h4>Would you rather?</h4>
                <p>{this.props.text}</p>
                <p>{this.props.votes} of {this.props.totalVotes}</p>
                <CircularProgressbar value={this.props.percentage} text={`${this.props.percentage}%`} />;

            </div>
        )
    }
}

export default ResultItem;