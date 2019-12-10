import { saveQuestionAnswer } from '../utils/api';
import { deleteUnanswered } from './unanswered';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function receiveQuestions (questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions,
    }
}   


export function saveAnswer(payload) {
    return {
        type: SAVE_ANSWER,
        payload,
    }
}


export function handleSaveAnswer(authedUser, qid, answer){

    return (dispatch) => {
        return saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                dispatch(saveAnswer({authedUser, qid, answer}));
                dispatch(deleteUnanswered(qid));
            })
    }
}


