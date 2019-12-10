import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import PollOptions from './PollOptions';
import PollResults from './PollResults';

class PollItem extends React.Component {
    render(){

        const {pollType,id} = this.props;

        return (
            <div>
                {pollType === 'answered' ? 
                    <PollResults id={id} /> :
                        <PollOptions id={id}/>
                }
            </div>
        )
    }
}

function mapStatetoProps ({users, questions, answered, unanswered}, props){
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