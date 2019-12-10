import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { withRouter, Link } from 'react-router-dom';

class Poll extends React.Component {
    
    toPoll(e,id){
        e.preventDefault();
        this.props.history.push(`/poll/${id}`);
    }
    
    
    render(){

        const {poll,user} = this.props;

        return(
            <div className='pollContainer'>
                <div>
                    <h3>{user.name} asks:</h3>
                    <img alt={user.name} src={user.avatarURL} width='100px' height='100px'/>
                </div>
                <div>
                    <h4>Would you rather</h4>
                    <p>...{poll.optionOne.text}</p>
                    <Link to={`/poll/${poll.id}`}
>
                    <button
                    onClick={(e) => {
                        this.toPoll(e,poll.id)
                    }}
                    to={`/poll/${poll.id}`}

                    >View poll</button>
                    </Link>
                    
                </div>

            </div>
            
        )
    }
}

function mapStateToProps({questions, users}, props){
   // console.log(props);
    const poll = questions[props.id];
    const user = users[poll.author]
    
    return {
        poll,
        user
    }
}

export default withRouter(connect(mapStateToProps, null)(Poll));