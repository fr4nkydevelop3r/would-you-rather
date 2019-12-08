import { RECEIVE_ANSWERED } from '../actions/answered';


export default function answered (state = {}, action) {
    switch(action.type) {
        case RECEIVE_ANSWERED:
            return {
                ...state,
                ...action.answered
            }
        
        default:
            return state;
    }
}