import { ADD_FRIEND } from "./types";

export const add_friend = (payload) => {
  return {
    type: ADD_FRIEND,
    payload,
  };
};
