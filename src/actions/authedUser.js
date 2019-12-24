export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "USER_LOGOUT";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
}
