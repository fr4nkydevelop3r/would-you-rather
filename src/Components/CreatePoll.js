import React from 'react';
import { connect } from 'react-redux';
import { handleCreateQuestion } from '../actions/questions'
import { withRouter }  from 'react-router-dom';

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
        return(
            <div>
                <h3>Would your rather?</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name='option1' onChange={this.handleOnChange} value= {this.state.option1}/>
                    </div>
                    <div>
                        <label>OR</label>
                    </div>
                    <div>
                        <input type="tex2" name='option2' onChange={this.handleOnChange} value= {this.state.option2}/>
                     </div>
                     <div>
                         <button>
                             Create
                         </button>
                     </div>

                </form>
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