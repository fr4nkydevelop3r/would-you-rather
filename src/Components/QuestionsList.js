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
       

       let answeredArray = Object.values(answered);
       answeredArray = answeredArray.sort((a,b) => b.timestamp - a.timestamp);

      
       let unansweredArray = Object.values(unanswered);
       unansweredArray = unansweredArray.sort((a,b) => b.timestamp - a.timestamp);


        return(
            

            <div>

                   {showUnanswered === true && unansweredArray.length > 0 ?
                      unansweredArray.map((q) => (
                          <Poll key={q.id} id={q.id}/>
                      )) :
                      answeredArray.map((q) => (
                          <Poll key={q.id} id={q.id}/>
                    ))
                   }
                    
                
            </div>
        )
    }
}




function mapStateToProps ({users, questions, unanswered, answered}, props) {


//  replies: !tweets[id] ? [] : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)


    return {
        users,
        questions,
        authedUser : props.authedUser,
        unanswered,
        answered
    }
}



export default connect(mapStateToProps, null)(QuestionsList);

