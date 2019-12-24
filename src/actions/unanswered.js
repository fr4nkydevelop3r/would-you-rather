export const RECEIVE_UNANSWERED = "RECEIVE_UNANSWERED";
export const DELETE_UNANSWERED = "DELETE_UNANSWERED";
export const CREATE_UNANSWERED = "CREATE_UNANSWERED";

export function receiveUnanswered(unanswered) {
  return {
    type: RECEIVE_UNANSWERED,
    unanswered
  };
}

export function deleteUnanswered(idq) {
  return {
    type: DELETE_UNANSWERED,
    key: idq
  };
}

export function createUnanswered(unanswered) {
  return {
    type: CREATE_UNANSWERED,
    unanswered
  };
}
