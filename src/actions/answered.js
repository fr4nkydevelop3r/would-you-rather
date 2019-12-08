export const RECEIVE_ANSWERED = 'RECEIVE_ANSWERED';

export function receiveAnswered (answered) {
    return {
        type: RECEIVE_ANSWERED,
        answered
    }
}