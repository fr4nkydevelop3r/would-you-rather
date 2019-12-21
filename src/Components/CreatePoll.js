import React from 'react';
import { connect } from 'react-redux';
import { handleCreateQuestion } from '../actions/questions'
import { withRouter }  from 'react-router-dom';
import SignIn  from './SignIn';

class CreatePoll extends React.Component {

    state = {
        option1 : '',
        option2: ''
    }

    handleOnChange = (e) => {

        if(e.target.name === 'option1'){
            this.setState({
                option1: e.target.value
            })
        } else if(e.target.name === 'option2'){
            this.setState({
                option2: e.target.value
            })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleCreateQuestion(this.props.authedUser, this.state.option1, this.state.option2);
        this.props.history.push('/');
    }

    render(){

        const {authedUser} = this.props;

        


        return(
            <div className='createPoll-container'>
                {authedUser ? 
                <div className='create-poll'>
                    <h3 className='create-poll-titlle'>Would your rather?</h3>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <div className='input-container'>
                                    <input className='input-poll' type="text" name='option1' onChange={this.handleOnChange} value= {this.state.option1}/>
                                </div>
                                <div className='or-container'>
                                    <label>or</label>
                                </div>
                                <div className='input-container'>
                                    <input className='input-poll' type="tex2" name='option2' onChange={this.handleOnChange} value= {this.state.option2}/>
                                </div>
                                <div className='create-btn-container'>
                                    <button className='btn-create'>
                                        Create
                                    </button>
                                </div>

                            </form>
                        </div>
                </div>
                    : <SignIn />}
                
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return{
        
        handleCreateQuestion : (author, optionOneText, optionTwoText) => {
            dispatch(handleCreateQuestion(author, optionOneText, optionTwoText));
        }
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePoll));