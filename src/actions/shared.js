import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions} from './questions'
import { receiveUnanswered } from './unanswered';
import { receiveAnswered, } from './answered'


const handleUnanswered = (questions, authedID) => {
   
    let questionsArray = Object.values(questions);


    questionsArray = questionsArray.filter((q) => (
        !q.optionOne.votes.includes(authedID) && !q.optionTwo.votes.includes(authedID)
    ))

    const arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
            obj[item[keyField]] = item
                return obj
    }, {})    
    
    
    const questionsObject = arrayToObject(questionsArray, "id");
    //console.log(questionsObject);

    return questionsObject;
}

const handleAnswered = (questions, authedID) => {
   
    let questionsArray = Object.values(questions);


    questionsArray = questionsArray.filter((q) => (
        q.optionOne.votes.includes(authedID) || q.optionTwo.votes.includes(authedID)
    ))


    const arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
            obj[item[keyField]] = item
                return obj
    }, {})    
    
    
    const questionsObject = arrayToObject(questionsArray, "id");

    return questionsObject;
}




export function handleInitialData(authedID) {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {

                const unanswered = handleUnanswered(questions, authedID);
                const answered = handleAnswered(questions, authedID);
                
                //dispatch(setAuthedUser(authedID));
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(receiveUnanswered(unanswered))
                dispatch(receiveAnswered(answered));
                
            })
    }
}