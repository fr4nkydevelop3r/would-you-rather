import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import unanswered from './unanswered'
import answered from './answered'

export default combineReducers({
    authedUser,
    users,
    questions: questions,
    unanswered,
    answered
    
})