export const RECEIVE_ANSWERED = 'RECEIVE_ANSWERED';
export const ADD_ANSWERED = 'ADD_ANSWERED';

export function receiveAnswered (answered) {
    return {
        type: RECEIVE_ANSWERED,
        answered
    }
}

export function addAnswered (payload) {
    return {
        type: ADD_ANSWERED,
        payload
    }
}

