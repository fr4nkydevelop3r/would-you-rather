import { RECEIVE_USERS, ADD_USER_ANSWER, ADD_USER_QUESTION } from '../actions/users';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.payload.authedUser]: {
                    ...state[action.payload.authedUser],
                    answers: {
                        ...state[action.payload.authedUser].answers,
                        [action.payload.qid]: action.payload.answer
                        
                    }
                        
                    }
                }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }

            }

                
            
        default:
            return state;
    }
}