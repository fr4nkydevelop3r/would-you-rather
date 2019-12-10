export const RECEIVE_UNANSWERED = 'RECEIVE_UNANSWERED';
export const DELETE_UNANSWERED = 'DELETE_UNANSWERED';

export function receiveUnanswered (unanswered) {
    return {
        type: RECEIVE_UNANSWERED,
        unanswered
    }
}

export function deleteUnanswered (idq) {
    return {
        type: DELETE_UNANSWERED,
        key : idq
    }
}