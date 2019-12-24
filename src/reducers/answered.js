import { RECEIVE_ANSWERED, ADD_ANSWERED } from "../actions/answered";

export default function answered(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ANSWERED:
      return {
        ...state,
        ...action.answered
      };
    case ADD_ANSWERED:
      return {
        ...state,
        [action.payload.poll.id]: {
          ...action.payload.poll
        }
      };

    default:
      return state;
  }
}
