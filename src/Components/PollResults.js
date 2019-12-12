import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ResultItem from './ResultItem';

class PollResults extends React.Component {


    render() {

        const {poll, authedUser} = this.props;

        let textOptionOne = '';
        let textOptionTwo = '';
        let totalVotes = 0;
        let votesOptionOne = 0;
        let votesOptionTwo = 0;
        let hasVotedOptionOne = false;
        let hasVotedOptionTwo = false;
        let percentageOptionOne = 0;
        let percentageOptionTwo = 0;



        if(poll){
            textOptionOne = poll.optionOne.text;
            textOptionTwo = poll.optionTwo.text;
            totalVotes = poll.optionOne.votes.length + poll.optionTwo.votes.length;
            votesOptionOne = poll.optionOne.votes.length;
            votesOptionTwo = poll.optionTwo.votes.length;
            hasVotedOptionOne = poll.optionOne.votes.includes(authedUser);
            hasVotedOptionTwo = poll.optionTwo.votes.includes(authedUser);
            percentageOptionOne = ((votesOptionOne /  totalVotes ) * 100).toFixed(1);
            percentageOptionTwo = ((votesOptionTwo /  totalVotes ) * 100).toFixed(1);


           /* console.log(textOptionOne);
            console.log(textOptionTwo);
            console.log(totalVotes);
            console.log(votesOptionOne);
            console.log(votesOptionTwo);
            console.log(hasVotedOptionOne);
            console.log(hasVotedOptionTwo);*/
        }



        return(
            <div>

            {poll && 
                <div>
                    <h4>Asked by {poll.author}</h4>
                    <ResultItem 
                        text={textOptionOne}
                        totalVotes={totalVotes}
                        votes={votesOptionOne}
                        hasVoted={hasVotedOptionOne}
                        percentage ={percentageOptionOne}
                    />
                    <ResultItem  
                        text={textOptionTwo}
                        totalVotes={totalVotes}
                        votes={votesOptionTwo}
                        hasVoted={hasVotedOptionTwo}
                        percentage={percentageOptionTwo}
                    />
                </div>
                
            }

            </div>
        )
    }
}

function mapStateToProps({answered, authedUser}, props){
    const { id } = props.match.params;

    const poll = answered[id];
    return{
        poll,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps, null)(PollResults));