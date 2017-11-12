import { LOGIN_SUCCESS, LOGIN_ERROR } from "../constants";
export function login(username, password) {
  if (username == "fahidroid" && password == "12345") {
    return {
      type: LOGIN_SUCCESS
    };
  } else {
    return {
      type: LOGIN_ERROR
    };
  }
}
