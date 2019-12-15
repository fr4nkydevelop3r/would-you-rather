import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PollOptions from './PollOptions';
import PollResults from './PollResults';
import SignIn from './SignIn';

class PollItem extends React.Component {
    render(){

        const {pollType,id, authedUser} = this.props;

        return (
            <div>{
                pollType === 'answered' ? 
                <PollResults /> :
                    <PollOptions id={id}/>
                    
                }
                
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
        id
    }
}

export default withRouter(connect(mapStatetoProps)(PollItem));