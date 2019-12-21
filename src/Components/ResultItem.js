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
                <div className='poll-results'>
                    <h4>Would you rather?</h4>
                    <p>{this.props.text}</p>
                    <p>{this.props.votes} of {this.props.totalVotes}</p>
                </div>
                <div className='progress-bar-container'>
                    <CircularProgressbar 
                        className='progress-bar' 
                        value={this.props.percentage} 
                        text={`${this.props.percentage}%`} 
                    />
                </div>

            </div>
        )
    }
}

export default ResultItem;