import React from 'react';
import QuestionsList from './QuestionsList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Signin from './SignIn';

class Home extends React.Component {

    
    state = {
        showUnanswered : true    
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

    handleQuestionsShow = () => {
        this.setState(() => ({
            showUnanswered : !this.state.showUnanswered
        }));
    }



    render(){

        const {authedUser} = this.props;
        

        return(

            authedUser ?
                <div>
                <button onClick={this.handleQuestionsShow} disabled={this.state.showUnanswered}>Unanswered Questions</button>
                <button onClick={this.handleQuestionsShow} disabled={!this.state.showUnanswered} >Answered Questions</button>
                 <QuestionsList showUnanswered={this.state.showUnanswered} />    
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