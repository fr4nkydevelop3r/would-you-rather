import React from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';
import { withRouter } from 'react-router-dom';

class PollOptions extends React.Component {


    state = {
        selectedOption: "optionOne"
    };
    
    handleSubmitAnswer = (e, poll, authedUser) => {
        e.preventDefault();
        this.props.handleSaveAnswer(authedUser, poll, this.state.selectedOption);
        this.props.history.push(`/`);

    }

    handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      };
    
    render() {
        const { user, poll, authedUser } = this.props;


        return(
            <div className='pollContainer'>
                <div>
                    <h3>{user.name} asks:</h3>
                    <img alt={user.name} src={user.avatarURL} width='100px' height='100px'/>
                </div>
                <div>
                    <h4>Would you rather?</h4>
                    <form onSubmit={(e) => { this.handleSubmitAnswer(e, poll, authedUser) }}>
                        <div>
                            <div>
                                <input 
                                    type="radio" 
                                    id="optionOne" 
                                    name="poll" 
                                    value="optionOne"
                                    checked={this.state.selectedOption === "optionOne"}
                                    onChange={this.handleOptionChange}

                                />
                                <label htmlFor="optionOne">{poll.optionOne.text}</label>
                            </div>
                            
                            <div>
                                <input 
                                    type="radio" 
                                    id="optionTwo" 
                                    name="poll" 
                                    value="optionTwo"
                                    checked={this.state.selectedOption === "optionTwo"}
                                    onChange={this.handleOptionChange}


                                />
                                <label htmlFor="optionTwo">{poll.optionTwo.text}</label>
                            </div>

                            <button type="submit">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps (dispatch) {
    return{
        handleSaveAnswer : (authedUser, qid, answer) => {
            dispatch(handleSaveAnswer(authedUser, qid, answer))
        }
    }
}


function mapStateToProps ({users,unanswered, authedUser}, props){
    const {id} = props;
    const poll = unanswered[id];
    const user = users[poll.author]
    return{
        user,
        poll,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PollOptions));

