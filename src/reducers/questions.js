import { RECEIVE_QUESTIONS, SAVE_ANSWER, CREATE_QUESTION } from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:
            return {
                ...state,
                [action.payload.qid]: {
                    ...state[action.payload.qid],
                        [action.payload.answer]: {
                            ...state[action.payload.qid][action.payload.answer],
                            votes: [
                                ...state[action.payload.qid][action.payload.answer].votes,
                                action.payload.authedUser
                            ]
                        }
                 }
        }

        case CREATE_QUESTION: 
            return {
                ...state,
                [action.question.id]: action.question
            }

    
         default:
            return state;
    }
}