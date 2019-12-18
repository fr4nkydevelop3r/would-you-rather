import React from 'react';
import QuestionsList from './QuestionsList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Signin from './SignIn';

class Home extends React.Component {

    
    state = {
        showQuestions : 'unanswered'
    }

    componentDidMount(){
        const {authedUser} = this.props;
        if(authedUser){
            this.props.handleInitialData(authedUser);   
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.authedUser !== this.props.authedUser){
            this.props.handleInitialData(this.props.authedUser);
        }
    }

    handleQuestionsShow = (e) => {
        e.persist();
        this.setState(() => ({
            showQuestions : e.target.name
        }));
    }



    render(){

        const {authedUser} = this.props;
        const {showQuestions} = this.state;

        return(

            authedUser ?
                <div className='home-container'>
                    <div className='questions-btns'>
                        <button 
                            onClick={this.handleQuestionsShow} 
                            name='unanswered'
                            className={`show-questions-btn ${showQuestions==='unanswered' ? 'selected-category': ''}`}>Unanswered Questions
                        </button>
                        <button 
                            onClick={this.handleQuestionsShow}  
                            name='answered'
                            className={`show-questions-btn ${showQuestions==='answered' ? 'selected-category': ''}`}>Answered Questions
                        </button>
                    </div>
                    <QuestionsList showQuestions={showQuestions} />    
            </div> :
            <div> <Signin /> </div> 
            


            
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
} 

const mapDispatchToProps = dispatch => {
    return {
      handleInitialData : (id) => {
        dispatch(handleInitialData(id))
      }
    }
  }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));