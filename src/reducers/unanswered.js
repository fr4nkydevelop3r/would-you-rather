import { RECEIVE_UNANSWERED } from '../actions/unanswered';


export default function unanswered (state = {}, action) {
    switch(action.type) {
        case RECEIVE_UNANSWERED:
            return {
                ...state,
                ...action.unanswered
            }
        
        default:
            return state;
    }
}