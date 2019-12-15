import { combineReducers} from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import unanswered from './unanswered'
import answered from './answered'


const appReducer = combineReducers({
    authedUser,
    users,
    questions: questions,
    unanswered,
    answered
    
})


const rootReducer = (state, action) => {
    console.log(action);
    if (action.type === 'USER_LOGOUT') {
        alert('Si llego al root reducer');
        state = undefined
    }
    
      return appReducer(state, action)
}

export default rootReducer;