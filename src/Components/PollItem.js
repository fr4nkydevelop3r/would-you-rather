import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PollOptions from './PollOptions';
import PollResults from './PollResults';
import SignIn from './SignIn';

class PollItem extends React.Component {
    render(){

        const {pollType,id, authedUser} = this.props;
        console.log(authedUser);
        console.log(id);
        console.log(pollType);
        return (
            <div>
            { authedUser ?
                pollType === 'answered' ? 
                <PollResults /> :
                    <PollOptions id={id}/>
                    
            : <SignIn /> }
                
            </div>
        )
    }
}

function mapStatetoProps ({users, questions, answered, unanswered, authedUser}, props){
    const { id } = props.match.params;
    
    let pollType = '';


    if(unanswered.hasOwnProperty(id)){
        pollType = 'unanswered'
    } else{
        pollType = 'answered'
    }

    return{
        pollType,
        id,
        authedUser
    }
}

export default withRouter(connect(mapStatetoProps)(PollItem));