import React from 'react';
import { connect } from 'react-redux'
import Poll from './Poll';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'


class QuestionsList extends React.Component {

    

    render(){


       const { unanswered, answered, showQuestions } = this.props;
       

       let answeredArray = Object.values(answered);
       answeredArray = answeredArray.sort((a,b) => b.timestamp - a.timestamp);

      
       let unansweredArray = Object.values(unanswered);
       unansweredArray = unansweredArray.sort((a,b) => b.timestamp - a.timestamp);



        return(

         


        <div className='questions-list-container'>

    

        { showQuestions === 'unanswered' ? unansweredArray.length > 0 ?
            unansweredArray.map((q) => (
                <Poll key={q.id} id={q.id}/>
            )) : 
            
            <div className='loader'>
                <Loader
                    type="Puff"
                    color="#ffc0cb"
                    height={100}
                    width={100}
                    timeout={1000} //3 secs
                />
                <div className='no-unanswered'>There aren't unanswered questions.</div>
            </div> : 

            answeredArray.length > 0 ?
            answeredArray.map((q) => (
                <Poll key={q.id} id={q.id}/>
            )) : 

            <div className='loader'>
                <Loader
                    type="Puff"
                    color="#ffc0cb"
                    height={100}
                    width={100}
                    timeout={1000} //3 secs
                />
                <div className='unanswered'>There aren't answered questions.</div>
            </div>
            }

        

       
        
    
</div>

       

        )
    }
}

/*

    answeredArray.map((q) => (
        <Poll key={q.id} id={q.id}/>
    ))

    unansweredArray.map((q) => (
        <Poll key={q.id} id={q.id}/>
    ))

 */




function mapStateToProps ({unanswered, answered}) {

    

    return {
        unanswered,
        answered
    }
}



export default connect(mapStateToProps, null)(QuestionsList);

