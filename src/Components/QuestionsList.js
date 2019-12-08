import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';

class QuestionsList extends React.Component {

    componentDidMount(){

        const {authedUser} = this.props;
        this.props.handleInitialData(authedUser);
    }

    render(){


       /*console.log(this.props.answered);
       console.log(this.props.unanswered);
       console.log(this.props.users);
       console.log(this.props.authedUser);*/


       const { unanswered, answered, users, showUnanswered, authedUser } = this.props;
       
       const unansweredIds = Object.keys(unanswered);
       const answeredIds = Object.keys(answered);
      

        return(
            

            <div>

                   {showUnanswered === true ?
                      unansweredIds.map((q) => (
                          <div key={q   }>{q}</div>
                      )) :
                      answeredIds.map((q) => (
                        <div key ={q}>{q}</div>
                    ))
                   }
                    
                
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
      handleInitialData : (id) => {
        dispatch(handleInitialData(id))
      }
    }
  }

function mapStateToProps ({users, questions, unanswered, answered}, props) {
    return {
        users,
        questions,
        authedUser : props.authedUser,
        unanswered,
        answered
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);

