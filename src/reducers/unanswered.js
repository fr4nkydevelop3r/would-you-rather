import { RECEIVE_UNANSWERED, DELETE_UNANSWERED, CREATE_UNANSWERED } from '../actions/unanswered';
import { omit } from 'lodash';

export default function unanswered (state = {}, action) {
    switch(action.type) {
        case RECEIVE_UNANSWERED:
            return {
                ...state,
                ...action.unanswered
            }
        case DELETE_UNANSWERED:
                return omit(state, action.key);
        case CREATE_UNANSWERED:
             return {
                 ...state,
                 [action.unanswered.id]: action.unanswered
             }
        
        default:
            return state;
    }
}