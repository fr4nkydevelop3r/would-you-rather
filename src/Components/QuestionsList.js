import React from 'react';
import { connect } from 'react-redux'
import Poll from './Poll';

class QuestionsList extends React.Component {

    

    render(){


       /*console.log(this.props.answered);
       console.log(this.props.unanswered);
       console.log(this.props.users);
       console.log(this.props.authedUser);*/


       const { unanswered, answered, showUnanswered } = this.props;
       
       const unansweredIds = Object.keys(unanswered);
       const answeredIds = Object.keys(answered);
      

        return(
            

            <div>

                   {showUnanswered === true ?
                      unansweredIds.map((q) => (
                          <Poll key={q} id={q}/>
                      )) :
                      answeredIds.map((q) => (
                          <Poll key={q} id={q}/>
                    ))
                   }
                    
                
            </div>
        )
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



export default connect(mapStateToProps, null)(QuestionsList);

