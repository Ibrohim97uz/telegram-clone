import { USER_DATA } from "./types";

export const new_user = (payload) => {
  return {
    type: USER_DATA,
    payload: payload,
  };
};
