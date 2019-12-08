import React from 'react';
import QuestionsList from './QuestionsList';

class Home extends React.Component {

    state = {
        showUnanswered : true
    }

    handleQuestionsShow = () => {
        this.setState(() => ({
            showUnanswered : !this.state.showUnanswered
        }));
    }

    render(){
        return(
            <div>
                <button onClick={this.handleQuestionsShow} disabled={this.state.showUnanswered}>Unanswered Questions</button>
                <button onClick={this.handleQuestionsShow} disabled={!this.state.showUnanswered} >Answered Questions</button>
                 <QuestionsList authedUser = 'sarahedo' showUnanswered={this.state.showUnanswered} />    
            </div>
        )
    }
}

export default Home;