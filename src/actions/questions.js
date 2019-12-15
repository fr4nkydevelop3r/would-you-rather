import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { deleteUnanswered, createUnanswered } from './unanswered';
import { addAnswered } from './answered';
import { addUserAnswer, addUserQuestion } from './users';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const CREATE_QUESTION = 'CREATE_QUESTION'


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

export function createQuestion(question) {
    return {
        type: CREATE_QUESTION,
        question
    }
}



function handleAddAnswer(payload){
    const {authedUser, poll, answer} = payload;

    poll[answer].votes = poll[answer].votes.concat(authedUser);

    return {
        authedUser,
        poll,
        answer
    }

}


export function handleSaveAnswer(authedUser, poll, answer){
    return (dispatch) => {
        return saveQuestionAnswer({authedUser, qid: poll.id , answer})
            .then(() => {
                dispatch(saveAnswer({authedUser, qid: poll.id, answer}));
                dispatch(deleteUnanswered(poll.id));
                dispatch(addAnswered(handleAddAnswer({authedUser, poll, answer })));
                dispatch(addUserAnswer({authedUser, qid: poll.id, answer}))

                
            })
    }
}


export function handleCreateQuestion(author, optionOneText, optionTwoText){
    return (dispatch) => {
        return saveQuestion({author, optionOneText, optionTwoText})
            .then((question) => {
                dispatch(createQuestion(question));
                dispatch(createUnanswered(question));
                dispatch(addUserQuestion(question))
            })
    }
}