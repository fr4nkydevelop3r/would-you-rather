export const RECEIVE_UNANSWERED = 'RECEIVE_UNANSWERED';

export function receiveUnanswered (unanswered) {
    return {
        type: RECEIVE_UNANSWERED,
        unanswered
    }
}